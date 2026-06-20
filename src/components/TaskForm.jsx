import { useState, useEffect } from "react";

function TaskForm({addTask, updateTask, editingTask}) {
    const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [priority, setPriority] = useState("High");
const [dueDate, setDueDate] = useState("");

useEffect(() => {
  if (editingTask) {
    setTitle(editingTask.title);
    setDescription(editingTask.description);
    setPriority(editingTask.priority);
    setDueDate(editingTask.dueDate);
  }
}, [editingTask]);


const handleSubmit = () => {

  if (editingTask) {

    updateTask({
      ...editingTask,
      title,
      description,
      priority,
      dueDate
    });

  } else {

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      status: "Pending",
      dueDate
    };

    addTask(newTask);
  }
};

return (
    <div className="tf-wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@500&display=swap');

        .tf-wrap {
          width: 100%;
          max-width: 560px;
          margin: 40px auto;
          padding: 0 16px;
          font-family: 'Inter', sans-serif;
        }
        .tf-card {
          background: #15171c;
          border: 1px solid #262932;
          border-radius: 10px;
          padding: 32px 36px;
        }
        .tf-heading {
          font-family: 'Sora', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #F4F5F7;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .tf-subheading {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11.5px;
          letter-spacing: 0.04em;
          color: #8A8F98;
          margin: 8px 0 28px 0;
        }
        .tf-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          background: ${editingTask ? "#E0A847" : "#5E626C"};
        }
        .tf-field {
          margin-bottom: 20px;
        }
        .tf-label {
          display: block;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6B6F79;
          margin-bottom: 8px;
        }
        .tf-input,
        .tf-textarea,
        .tf-select {
          width: 100%;
          background: #1B1E25;
          border: 1px solid #2C2F38;
          border-radius: 6px;
          padding: 10px 12px;
          color: #E8E9EC;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color-scheme: dark;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          box-sizing: border-box;
        }
        .tf-input::placeholder,
        .tf-textarea::placeholder {
          color: #5E626C;
        }
        .tf-input:focus,
        .tf-textarea:focus,
        .tf-select:focus {
          outline: none;
          border-color: #5B7FDE;
          box-shadow: 0 0 0 3px rgba(91, 127, 222, 0.15);
        }
        .tf-textarea {
          min-height: 90px;
          resize: vertical;
          line-height: 1.5;
        }
        .tf-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%238A8F98' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 32px;
          cursor: pointer;
        }
        .tf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 480px) {
          .tf-row {
            grid-template-columns: 1fr;
          }
          .tf-card {
            padding: 26px 22px;
          }
        }
        .tf-preview-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          padding: 12px 0 20px 0;
          border-top: 1px solid #21232b;
          margin-top: 4px;
        }
        .tf-preview-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #5E626C;
          flex-shrink: 0;
        }
        .tf-preview-value {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          color: #C7C9CE;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .tf-submit {
          width: 100%;
          background: #5B7FDE;
          border: none;
          border-radius: 6px;
          padding: 11px 0;
          color: #FFFFFF;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .tf-submit:hover {
          background: #4A6BC4;
        }
        .tf-submit:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(91, 127, 222, 0.3);
        }
      `}</style>

      <div className="tf-card">

        <h3 className="tf-heading">Add New Task</h3>
        <p className="tf-subheading">
          <span className="tf-dot" />
          {editingTask ? editingTask.title : "No Task Selected"}
        </p>

        <div className="tf-field">
          <label className="tf-label">
            Task Title
          </label>
          <input
            type="text"
            className="tf-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="tf-field">
          <label className="tf-label">
            Description
          </label>
          <textarea
            className="tf-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="tf-row">

          <div className="tf-field">
            <label className="tf-label">
              Priority
            </label>
            <select
              className="tf-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div className="tf-field">
            <label className="tf-label">
              Due Date
            </label>
            <input
              type="date"
              className="tf-input"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

        </div>

        <div className="tf-preview-row">
          <span className="tf-preview-label">Preview</span>
          <span className="tf-preview-value">{title}</span>
        </div>

        <button
          className="tf-submit"
          onClick={() => handleSubmit()}
        >
          {editingTask ? "Update Task" : "Add Task"}
        </button>

      </div>
    </div>
  );
}

export default TaskForm;