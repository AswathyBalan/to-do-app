import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React basics', completed: true },
    { id: 2, text: 'Build a To-Do List app', completed: false },
    { id: 3, text: 'Push project to GitHub', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed === '') return;

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue('');
  };

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="app">
      <div className="app-container">
        <Header totalCount={todos.length} completedCount={completedCount} />

        <form className="add-form" onSubmit={handleAddTodo}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What needs to be done?"
            className="add-input"
          />
          <button type="submit" className="btn btn-add">
            Add Task
          </button>
        </form>

        <ToDoList
          todos={todos}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
        />
      </div>
    </div>
  );
}

export default App;
