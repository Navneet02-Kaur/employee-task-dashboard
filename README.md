# Employee Task Management Dashboard

## Overview

Employee Task Management Dashboard is a responsive web application developed using React.js and Bootstrap. The application helps users manage daily tasks efficiently by allowing them to create, update, delete, search, filter, and track task progress.

The project is designed to provide a simple and user-friendly interface for task management while demonstrating the use of React state management, component-based architecture, and browser local storage.

---

## Features

### Task Management

* Add new tasks with title, description, priority, and due date.
* Edit existing tasks whenever required.
* Delete tasks that are no longer needed.
* Mark tasks as completed.

### Dashboard Statistics

The dashboard automatically displays:

* Total number of tasks
* Number of completed tasks
* Number of pending tasks

Statistics are updated dynamically whenever a task is added, edited, completed, or deleted.

### Search Functionality

* Search tasks instantly by title.
* Helps users quickly locate specific tasks from the task list.

### Filter Functionality

Tasks can be filtered based on:

* All Tasks
* Completed Tasks
* Pending Tasks
* High Priority Tasks

### Priority Management

Each task can be assigned a priority level:

* High Priority
* Medium Priority
* Low Priority

Priority badges are displayed visually for better task organization.

### Task Status Tracking

Users can track the progress of tasks through:

* Pending Status
* Completed Status

Completed tasks are visually differentiated from pending tasks.

### Local Storage Integration

The application uses browser Local Storage to persist task data.

Benefits:

* Tasks remain available even after refreshing the page.
* No backend or database is required.
* User data is stored locally in the browser.

### Responsive User Interface

The application is fully responsive and works on:

* Desktop Devices
* Tablets
* Mobile Phones

The layout automatically adjusts to different screen sizes for a better user experience.

---

## Technologies Used

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Bootstrap 5

### React Concepts Implemented

* Functional Components
* Props
* useState Hook
* useEffect Hook
* Component Reusability
* Conditional Rendering
* Event Handling

### Browser Storage

* Local Storage API

---

## Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── DashboardStats.jsx
│   ├── TaskForm.jsx
│   ├── TaskCard.jsx
│   └── FilterBar.jsx
│
├── pages/
│   └── Dashboard.jsx
│
├── App.jsx
└── main.jsx
```

---

## Functional Workflow

1. User creates a new task.
2. Task is stored in React state.
3. Task data is automatically saved to Local Storage.
4. Dashboard statistics update instantly.
5. Users can edit, complete, search, filter, or delete tasks.
6. On page refresh, tasks are loaded back from Local Storage.

---

## Key Learning Outcomes

This project demonstrates:

* CRUD Operations in React
* State Management using Hooks
* Component-Based Architecture
* Dynamic Rendering
* Local Storage Persistence
* Responsive UI Design
* Search and Filter Implementation

---

## Future Enhancements

* Dark Mode Support
* User Authentication
* Backend Integration
* Database Connectivity
* Task Categories
* Due Date Notifications
* Drag and Drop Task Management

---

## Author

**Navneet Kaur**
MCA Student
React.js Project – Employee Task Management Dashboard

Project Deployed on Vercel
https://employee-task-dashboard-iota.vercel.app/

<img width="935" height="907" alt="image" src="https://github.com/user-attachments/assets/4b749c49-3112-4c3d-89fe-e4b61154611a" />

