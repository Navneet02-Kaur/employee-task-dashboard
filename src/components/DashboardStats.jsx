function DashboardStats({totalTasks, completedTasks, pendingTasks}) {
  return (
    <div className="container mt-4">
      <div className="row">

        <div className="col-md-4 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Total Tasks</h5>
              <h2>{totalTasks}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Completed Tasks</h5>
              <h2>{completedTasks}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Pending Tasks</h5>
              <h2>{pendingTasks}</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardStats;