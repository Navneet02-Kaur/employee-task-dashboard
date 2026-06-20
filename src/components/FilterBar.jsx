function FilterBar({serchTerm, setSearchTerm, filter, setFilter}) {
  return (
    <div className="fb-wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

        .fb-wrap {
          width: 100%;
          margin: 24px 0;
        }
        .fb-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .fb-search {
          position: relative;
          flex: 1;
          min-width: 220px;
        }
        .fb-search-icon {
          position: absolute;
          left: 13px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }
        .fb-input {
          width: 100%;
          background: #15171c;
          border: 1px solid #262932;
          border-radius: 6px;
          padding: 10px 14px 10px 36px;
          color: #E8E9EC;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          box-sizing: border-box;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .fb-input::placeholder {
          color: #5E626C;
        }
        .fb-input:focus {
          outline: none;
          border-color: #5B7FDE;
          box-shadow: 0 0 0 3px rgba(91, 127, 222, 0.15);
        }
        .fb-select {
          background: #15171c;
          border: 1px solid #262932;
          border-radius: 6px;
          padding: 10px 32px 10px 14px;
          color: #E8E9EC;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          min-width: 180px;
          appearance: none;
          color-scheme: dark;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%238A8F98' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          cursor: pointer;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .fb-select:focus {
          outline: none;
          border-color: #5B7FDE;
          box-shadow: 0 0 0 3px rgba(91, 127, 222, 0.15);
        }
        @media (max-width: 600px) {
          .fb-select {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>

      <div className="fb-row">

        <div className="fb-search">
          <svg
            className="fb-search-icon"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="11" cy="11" r="7" stroke="#5E626C" strokeWidth="2" />
            <path d="M21 21L16.65 16.65" stroke="#5E626C" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            className="fb-input"
            placeholder="Search tasks..."
            value={serchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="fb-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Tasks</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="High">High Priority</option>
        </select>

      </div>
    </div>
  );
}

export default FilterBar;