import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p className="text-lg">No tasks yet</p>
        <p className="text-sm">Add your first task above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onToggle={() => onToggleTask(task._id)}
          onDelete={() => onDeleteTask(task._id)}
        />
      ))}
    </div>
  );
}

export default TaskList;