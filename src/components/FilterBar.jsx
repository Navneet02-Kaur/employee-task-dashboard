function FilterBar({serchTerm, setSearchTerm, filter, setFilter}) {
  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search tasks..."
        value={serchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select 
        className="form-select mt-2" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)}
      >
  <option value="All">All Tasks</option>
  <option value="Completed">Completed</option>
  <option value="Pending">Pending</option>
  <option value="High">High Priority</option>
</select>
    </div>
  );
}

export default FilterBar;