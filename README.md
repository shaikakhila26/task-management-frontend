# Task Management App - Frontend

A simple React.js frontend application for interacting with the Task Management REST API.

## Features

- User Registration
- User Login
- JWT Token Storage
- Protected Dashboard
- Create Tasks
- Update Tasks
- Delete Tasks
- Logout Functionality
- Axios API Integration

---

# Tech Stack

- React.js
- Vite
- Axios
- React Router DOM

---

# Folder Structure

frontend/
├── src/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js

---


## Install Dependencies

cd frontend
npm install

---

# Run Frontend

npm run dev

Frontend runs on:

http://localhost:5173

---

# API Configuration

Update:

src/services/api.js

Example:

const api = axios.create({
  baseURL: 'https://your-backend-url.onrender.com/api/v1'
});

---

# Pages

## Register Page

- Name
- Email
- Password

## Login Page

- Email
- Password

## Dashboard

- View Tasks
- Create Tasks
- Update Tasks
- Delete Tasks
- Logout

---

# Authentication

JWT token is stored in localStorage.

Protected routes redirect unauthorized users to login page.

---

# Deployment

## Frontend Deployment

Vercel

---

# Future Improvements

- Better UI Design
- React Context API
- Redux/Zustand
- Toast Notifications
- Pagination
- Search & Filters
- Dark Mode

---

# Author

Shaik Akhila