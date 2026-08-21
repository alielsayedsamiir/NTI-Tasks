# 🎓 Student & Course Management System (API)

A complete RESTful API built with Express.js, MongoDB, Mongoose, JWT, and Multer for authentication, role-based access control, file handling, and course management.

## 🚀 Setup Instructions
1. Run `npm install` to download dependencies.
2. Ensure MongoDB service is running locally.
3. Run `npm run dev` to start the development server.

## 📌 Routes
- `POST /api/v1/auth/signup` - Register user (`form-data` with `userImage`)
- `POST /api/v1/auth/signin` - Login user (`json` body)
- `GET /api/v1/users/courses` - Fetch enrolled user courses (Protected, Bearer Token)
- `POST /api/v1/users/courses` - Enroll in course (Protected, Bearer Token)