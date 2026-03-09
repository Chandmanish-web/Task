import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Load tasks from backend on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Persist to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // persist theme
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      // if backend unreachable, keep existing local tasks - no alert needed
    }
  };

  const addTask = async (text) => {
    const taskId = Date.now().toString(); // Local ID for offline support
    const newTask = { _id: taskId, text, completed: false };
    setTasks([...tasks, newTask]);
    
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', { text });
      setTasks(prev => prev.map(t => t._id === taskId ? response.data : t));
    } catch (error) {
      console.error('Error adding task:', error);
      // Task remains locally saved, will sync when server is available
    }
  };

  const toggleTask = async (id) => {
    const task = tasks.find(t => t._id === id);
    const updated = { ...task, completed: !task.completed };
    setTasks(tasks.map(t => t._id === id ? updated : t));
    
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, {
        completed: !task.completed
      });
      setTasks(tasks.map(t => t._id === id ? response.data : t));
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const deleteTask = async (id) => {
    setTasks(tasks.filter(t => t._id !== id));
    
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const clearCompleted = async () => {
    if (!window.confirm('Are you sure you want to remove all completed tasks?')) return;
    setTasks(tasks.filter(t => !t.completed));
    
    try {
      await axios.delete('http://localhost:5000/api/tasks');
    } catch (error) {
      console.error('Error clearing completed tasks:', error);
    }
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen py-8 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'}`}>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
              Task Manager
            </h1>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded focus:outline-none"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
          
          <TaskInput onAddTask={addTask} />
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">
                {tasks.filter(t => !t.completed).length} tasks remaining
              </span>
              {tasks.some(t => t.completed) && (
                <button
                  onClick={clearCompleted}
                  className="text-sm text-red-600 hover:text-red-800 font-medium"
                >
                  Clear completed
                </button>
              )}
            </div>
            
            <TaskList 
              tasks={tasks} 
              onToggleTask={toggleTask} 
              onDeleteTask={deleteTask} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;