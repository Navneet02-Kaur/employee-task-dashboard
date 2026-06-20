function DashboardStats({totalTasks, completedTasks, pendingTasks}) {
  return (
    <div className="ds-wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700&family=IBM+Plex+Mono:wght@500&display=swap');

        .ds-wrap {
          width: 100%;
          margin: 40px 0;
        }
        .ds-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 700px) {
          .ds-grid {
            grid-template-columns: 1fr;
          }
        }
        .ds-card {
          background: #15171c;
          border: 1px solid #262932;
          border-left: 3px solid var(--accent);
          border-radius: 10px;
          padding: 24px 26px;
          transition: border-color 0.15s ease;
        }
        .ds-card:hover {
          border-color: #34373f;
        }
        .ds-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8A8F98;
          margin: 0 0 14px 0;
        }
        .ds-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
        .ds-value {
          font-family: 'Sora', sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #F4F5F7;
          margin: 0;
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.01em;
        }
      `}</style>

      <div className="ds-grid">

        <div className="ds-card" style={{ "--accent": "#5B7FDE" }}>
          <h5 className="ds-label">
            <span className="ds-dot" />
            Total Tasks
          </h5>
          <h2 className="ds-value">{totalTasks}</h2>
        </div>

        <div className="ds-card" style={{ "--accent": "#3DA35D" }}>
          <h5 className="ds-label">
            <span className="ds-dot" />
            Completed Tasks
          </h5>
          <h2 className="ds-value">{completedTasks}</h2>
        </div>

        <div className="ds-card" style={{ "--accent": "#E0A847" }}>
          <h5 className="ds-label">
            <span className="ds-dot" />
            Pending Tasks
          </h5>
          <h2 className="ds-value">{pendingTasks}</h2>
        </div>

      </div>
    </div>
  );
}

export default DashboardStats;