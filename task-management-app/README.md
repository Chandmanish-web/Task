# MERN Task Management App

This is a simple interactive task manager built with the MERN stack and Tailwind CSS.

## Features

- Add, toggle, delete and clear tasks
- Tasks persist locally via localStorage and sync to backend when available
- Offline mode keeps existing tasks with a notification
- Light/dark theme toggle (stored in localStorage)
- Confirm before clearing completed tasks

## Setup

1. Install backend dependencies:
   ```bash
   cd task-management-app
   npm install
   ```
2. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```
3. Start MongoDB if running locally
4. Start servers in separate terminals:
   ```bash
   npm run dev       # backend
   cd client && npm start   # frontend
   # or npm run dev:full to run both concurrently
   ```

## Deployment

Push to GitHub or deploy on Heroku/Vercel following the typical MERN deployment workflow.


Enjoy your interactive task manager! Feel free to expand functionality or styling.