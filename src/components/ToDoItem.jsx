import { useState } from 'react';

function ToDoItem({ todo, onToggleComplete, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const trimmed = editText.trim();
    if (trimmed === '') return;
    onEdit(todo.id, trimmed);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form className="edit-form" onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
            className="edit-input"
          />
          <button type="submit" className="btn btn-save">Save</button>
          <button type="button" className="btn btn-cancel" onClick={handleCancelEdit}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <label className="todo-label">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleComplete(todo.id)}
            />
            <span className="todo-text">{todo.text}</span>
          </label>
          <div className="todo-actions">
            <button className="btn btn-edit" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="btn btn-delete" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
