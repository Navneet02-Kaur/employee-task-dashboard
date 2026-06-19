import { useState } from "react";

function TaskForm({addTask}) {
    const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [priority, setPriority] = useState("High");
const [dueDate, setDueDate] = useState("");
const handleSubmit = () => {
  const newTask = {
    id: Date.now(),
    title,
    description,
    priority,
    status: "Pending",
    dueDate
  };

  addTask(newTask);
};

return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">

          <h3>Add New Task</h3>

          <div className="mb-3">
            <label className="form-label">
              Task Title
            </label>
            <input
  type="text"
  className="form-control"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Description
            </label>
            <textarea
  className="form-control"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Priority
            </label>
            <select
  className="form-select"
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Due Date
            </label>
            <input
              type="date"
              className="form-control"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

<h5>{title}</h5>
          <button className="btn btn-primary" onClick={() => handleSubmit()}>
            Add Task
          </button>

        </div>
      </div>
    </div>
  );
}

export default TaskForm;