function TaskCard({ title, description, priority, status, dueDate, onComplete, id , onDelete, onEdit }) {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">

          <h4>{title}</h4>

          <p>
            {description}
          </p>

          <p>
            <strong>Priority:</strong> {priority}
          </p>

          <p>
            <strong>Status:</strong> {status}
          </p>

          <p>
            <strong>Due Date:</strong> {dueDate}
          </p>

          <button
  className="btn btn-warning me-2"
  onClick={() =>
    onEdit({
      id,
      title,
      description,
      priority,
      status,
      dueDate
    })
  }
>
  Edit
</button>

          <button
  className="btn btn-danger me-2"
  onClick={() => onDelete(id)}
>
  Delete
</button>

          <button
  className="btn btn-success"
  onClick={() => onComplete(id)}
>
  Complete
</button>

        </div>
      </div>
    </div>
  );
}

export default TaskCard;