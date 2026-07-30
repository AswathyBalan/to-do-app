function Header({ totalCount, completedCount }) {
  return (
    <header className="app-header">
      <h1>My To-Do List</h1>
      <p className="subtitle">
        {completedCount} of {totalCount} tasks completed
      </p>
    </header>
  );
}

export default Header;
