# 📝 Task Management REST API

A backend REST API built with **Node.js, Express.js, MongoDB, and Mongoose**, developed as a hands-on project to learn real-world backend development.

## 🚀 Features

* 👤 User registration & login
* 🔐 JWT authentication & authorization
* 🔒 Password hashing with bcrypt
* ✅ Request validation with Joi
* 📋 Task CRUD operations
* 👥 User-owned resources
* 🔎 Filtering & text searching
* ↕️ Sorting & pagination
* ⚠️ Centralized error handling
* 🛡️ API security & input validation
* 🗄️ MongoDB & Mongoose querying
* ⚡ Database indexing & optimization
* 🧪 API testing with Postman
* 🏗️ Modular & scalable backend architecture
* 🚀 Production-ready backend practices

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js
**Database:** MongoDB, Mongoose
**Authentication:** JWT, bcrypt
**Validation:** Joi
**Testing:** Postman

## 📂 Architecture

```text
Routes → Middleware → Controllers → Mongoose → MongoDB
```

The project follows a modular structure separating routes, controllers, middleware, models, and validations.

## 🔍 Example

```http
GET /allTasks?status=pending&priority=high&search=node&sort=-dueDate&page=1&limit=10
```

Supports combining **authentication, filtering, searching, sorting, and pagination** in a single request.

## 🎯 Goal

The goal of this project is to understand how to **design, build, secure, test, and optimize a real-world REST API** rather than simply creating basic CRUD operations.

> **Build it. Understand it. Break it. Fix it. Improve it. 🚀**

## 📌 Status

🚧 **In Development** — continuously expanding toward a production-ready backend.
