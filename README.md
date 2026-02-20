# 🚀 Job Application Tracker

A modern Kanban-style job application tracker built with Vue 3, Pinia, and TailwindCSS.

This project allows users to manage their job applications visually through a drag-and-drop board, similar to Trello.

---

## 📌 Features

- ✅ Create job applications
- 🗂 Organize by status (Applied, Interview, Technical Test, Offer, Rejected)
- 🖱 Drag & Drop between columns
- 💾 Persistent state using LocalStorage
- ⚡ Built with Vue 3 Composition API
- 🏪 State management with Pinia
- 🎨 Clean UI with TailwindCSS
- 🧠 Clean architecture structure

---

## 🧱 Project Structure

src/
├── components/
│ ├── JobCard.vue
│ ├── ColumnBoard.vue
│ └── AddJobModal.vue
├── stores/
│ └── jobStore.ts
├── composables/
│ └── useLocalStorage.ts
├── views/
│ └── Dashboard.vue
├── types/
│ └── job.ts
├── App.vue
└── main.ts

---

## 🧠 Architecture

### 📌 jobStore.ts
Responsible for:
- Global state
- Business logic
- Mutations
- Status updates
- Persistence trigger

### 📌 useLocalStorage.ts
Reusable composable that:
- Synchronizes reactive state with localStorage
- Keeps the store clean
- Makes persistence reusable

### 📌 Component Responsibilities

| Component        | Responsibility |
|-----------------|---------------|
| Dashboard       | Main layout and board rendering |
| ColumnBoard     | Renders jobs by status and handles drop events |
| JobCard         | Displays job data and handles drag |
| AddJobModal     | Create & edit job flow |

---

## 🛠 Tech Stack

- Vue 3 (Composition API)
- TypeScript
- Pinia
- Vite
- TailwindCSS
- HTML5 Drag & Drop API

---


## 🧪 How to Run

```bash
npm install
npm run dev
