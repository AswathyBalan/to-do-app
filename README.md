# React To-Do List App

A simple, styled To-Do List application built with React (functional components + hooks) and Vite.

## Features

- Add new tasks
- Mark tasks as completed (checkbox, with strikethrough styling)
- Edit existing tasks inline
- Delete tasks
- Live count of completed vs total tasks
- Responsive, clean UI styled with plain CSS

## Component Structure

- **App** — holds the `todos` state and all handler functions (add, toggle, edit, delete); passes them down as props.
- **Header** — displays the title and a completed/total task count.
- **ToDoList** — receives the `todos` array as a prop and renders a `ToDoItem` for each one using `.map()`, with each item keyed by its unique `id`.
- **ToDoItem** — displays a single task, its checkbox, and Edit/Delete buttons; switches to an inline edit form when "Edit" is clicked.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation & Running Locally

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (typically `http://localhost:5173`) in your browser.

### Build for Production

```bash
npm run build
```

The optimized production build will be output to the `dist/` folder. You can preview it locally with:

```bash
npm run preview
```

## Tech Stack

- React 19 (functional components + `useState`)
- Vite (build tool / dev server)
- Plain CSS
