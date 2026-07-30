import ToDoItem from './ToDoItem';

function ToDoList({ todos, onToggleComplete, onDelete, onEdit }) {
  if (todos.length === 0) {
    return <p className="empty-message">No tasks yet. Add one above to get started!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
