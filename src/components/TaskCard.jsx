function TaskCard({ title, description, priority, status, dueDate, onComplete, id , onDelete, onEdit }) {
  return (
    <div className="container mt-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@500&display=swap');

        .tc-card {
          background: #15171c;
          border: 1px solid #262932;
          border-left: 3px solid ${status === "Completed" ? "#3DA35D" : "#3a3d46"};
          border-radius: 8px;
          padding: 24px 26px;
          font-family: 'Inter', sans-serif;
          color: #E8E9EC;
          transition: border-color 0.15s ease;
        }
        .tc-card:hover {
          border-color: #34373f;
        }
        .tc-title {
          font-family: 'Sora', sans-serif;
          font-size: 19px;
          font-weight: 700;
          margin: 0 0 10px 0;
          color: #F4F5F7;
          letter-spacing: -0.01em;
        }
        .tc-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: #9CA0AA;
          margin: 0 0 20px 0;
        }
        .tc-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          padding: 16px 0;
          border-top: 1px solid #21232b;
          border-bottom: 1px solid #21232b;
          margin-bottom: 20px;
        }
        .tc-meta-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .tc-meta-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #5E626C;
        }
        .tc-meta-value {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13.5px;
          font-weight: 500;
          color: #D7D9DD;
        }
        .tc-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
          display: inline-block;
        }
        .tc-due {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13.5px;
          color: #D7D9DD;
        }
        .tc-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
        .tc-btn {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
          border: 1px solid #2C2F38;
          background: transparent;
          color: #C7C9CE;
        }
        .tc-btn:hover {
          border-color: #3A3D46;
          background: #1B1E25;
        }
        .tc-btn-delete:hover {
          border-color: #5C2A2D;
          color: #F0989B;
          background: rgba(229, 72, 77, 0.08);
        }
        .tc-btn-complete {
          border-color: #2C5C3D;
          color: #6FCF97;
          background: rgba(61, 163, 93, 0.08);
        }
        .tc-btn-complete:hover {
          border-color: #3DA35D;
          background: rgba(61, 163, 93, 0.16);
        }
      `}</style>

      <div className="tc-card">

        <h4 className="tc-title">{title}</h4>

        <p className="tc-desc">
          {description}
        </p>

        <div className="tc-meta-row">

          <div className="tc-meta-item">
            <span className="tc-meta-label">Priority</span>
            <span className="tc-meta-value">

              {priority === "High" && (
                <>
                  <span className="tc-dot" style={{ background: "#E5484D" }} />
                  High
                </>
              )}

              {priority === "Medium" && (
                <>
                  <span className="tc-dot" style={{ background: "#E0A847" }} />
                  Medium
                </>
              )}

              {priority === "Low" && (
                <>
                  <span className="tc-dot" style={{ background: "#3DA35D" }} />
                  Low
                </>
              )}

            </span>
          </div>

          <div className="tc-meta-item">
            <span className="tc-meta-label">Status</span>
            <span className="tc-meta-value">
              <span
                className="tc-dot"
                style={{
                  background: status === "Completed" ? "#3DA35D" : "#7C8089",
                }}
              />
              {status}
            </span>
          </div>

          <div className="tc-meta-item">
            <span className="tc-meta-label">Due Date</span>
            <span className="tc-due">{dueDate}</span>
          </div>

        </div>

        <div className="tc-actions">

          <button
            className="tc-btn"
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
            className="tc-btn tc-btn-delete"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>

          <button
            className="tc-btn tc-btn-complete"
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