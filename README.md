# CMS Panel

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-success)](https://cms-farsi.netlify.app)

A modern and responsive **Content Management System (CMS) Dashboard** built with React, TypeScript, and Vite.

This project provides a dashboard interface for managing users, courses, and articles with reusable components, form validation, API integration, state management, and responsive UI.

## ✨ Features

- 👤 User management
  - Create users
  - Edit users
  - Remove users
  - Display user list

- 📚 Course management
  - Create courses
  - Display course list
  - Remove courses

- 📰 Article management
  - Create articles
  - Display article list
  - Remove articles

- 🔍 Search functionality

- 🌙 Theme management

- 🔔 Toast notifications

- ⏳ Loading and skeleton states

- 🧩 Reusable React components

- 📝 Form management and validation

- 🔗 REST API integration

- 📱 Responsive dashboard layout

- 🗂️ Centralized state management with Redux Toolkit

---

## 🛠️ Technologies

### Core

- **React** `19.2.0`
- **React DOM** `19.2.0`
- **TypeScript**
- **Vite**

### State Management

- **Redux** `5.0.1`
- **Redux Toolkit** `2.11.2`
- **React Redux** `9.2.0`

### Data Fetching & API

- **TanStack React Query** `5.103.1`
- **Axios** `1.20.0`

### Forms & Validation

- **React Hook Form** `7.88.0`
- **Zod** `4.6.5`
- **Hookform Resolvers** `5.9.1`

### Routing

- **React Router** `7.11.0`

### UI & Utilities

- **React Icons** `5.5.0`
- **React Toastify** `11.1.0`
- **Clsx** `2.1.1`

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/aminkazemideveloper-web/cms-panel-persion.git
```

Navigate to the project:

```bash
cd cms-panel-persion
```

Install dependencies:

```bash
npm install
```

---

## 🚀 Run the Project

Start the development server:

```bash
npm run dev
```

Then open the URL provided by Vite in your browser.

---

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
cms-panel-persion/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── Components/
│   │   ├── ArticleItem/
│   │   ├── Articles/
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Container/
│   │   ├── CourseItem/
│   │   ├── Courses/
│   │   ├── Inputbox/
│   │   ├── SearchBox/
│   │   ├── ThemeButton/
│   │   ├── Toast/
│   │   └── Users/
│   │
│   ├── Redux/
│   │   ├── slice/
│   │   └── store.ts
│   │
│   ├── featurs/
│   │   ├── Header/
│   │   └── Sidebar/
│   │
│   ├── hooks/
│   │
│   ├── modals/
│   │   ├── CreateArticleModal/
│   │   ├── CreateCourseModal/
│   │   ├── CreateUserModal/
│   │   ├── EditUserModal/
│   │   ├── FormModal/
│   │   ├── Modal/
│   │   └── RemoveModal/
│   │
│   ├── pages/
│   │   ├── ArticlesPage/
│   │   ├── CoursesPage/
│   │   ├── Infos/
│   │   └── UsersPage/
│   │
│   ├── services/
│   │   ├── api/
│   │   └── hooks/
│   │
│   ├── skeletons/
│   │
│   ├── styles/
│   │
│   ├── types/
│   │
│   ├── validator/
│   │
│   ├── Routes.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🔌 API

The project uses **Axios** for HTTP requests and **TanStack React Query** for server-state management.

API requests are organized by resource:

```text
src/
└── services/
    ├── api/
    │   └── request/
    │       ├── articles/
    │       ├── courses/
    │       └── users/
    │
    └── hooks/
        ├── articles/
        ├── courses/
        └── users/
```

The API configuration can be found in:

```text
src/services/api/config/instance.ts
```

---

## 🧠 State Management

Global application state is managed using **Redux Toolkit**.

The Redux configuration is located in:

```text
src/Redux/
```

Example structure:

```text
Redux/
├── slice/
│   └── themeSlice.ts
└── store.ts
```

---

## 📝 Form Validation

Forms are managed using:

- React Hook Form
- Zod
- @hookform/resolvers

This combination provides structured form handling and schema-based validation.

---

## 🎨 UI

The dashboard uses reusable components and modular CSS files.

Examples include:

- Button
- Input
- Badge
- Search Box
- Modal
- Toast
- Skeleton
- Header
- Sidebar
- Article Item
- Course Item
- User Item

---

## 📜 Available Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start development server         |
| `npm run build`   | Build application for production |
| `npm run preview` | Preview production build         |

---

## 📦 Dependencies

```json
{
  "@hookform/resolvers": "^5.9.1",
  "@reduxjs/toolkit": "^2.11.2",
  "@tanstack/react-query": "^5.103.1",
  "axios": "^1.20.0",
  "clsx": "^2.1.1",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-hook-form": "^7.88.0",
  "react-icons": "^5.5.0",
  "react-redux": "^9.2.0",
  "react-router": "^7.11.0",
  "react-toastify": "^11.1.0",
  "redux": "^5.0.1",
  "zod": "^4.6.5"
}
```

---

## 🔐 Environment Variables

If the project requires environment variables, create a `.env` file in the project root:

```env
VITE_API_URL=your_api_url
```

Do not commit sensitive information such as API keys, tokens, or passwords to GitHub.

---

## 👨‍💻 Author

**Amin Kazemi**

GitHub:

https://github.com/aminkazemideveloper-web

---

## 📄 License

This project is intended for educational and development purposes.
