import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import DashboardStats from "../components/DashboardStats";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";

function Dashboard() {

 const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  return savedTasks
    ? JSON.parse(savedTasks)
    : [
        {
          id: 1,
          title: "Create Monthly Report",
          description: "Prepare and submit the monthly sales report.",
          priority: "High",
          status: "Pending",
          dueDate: "25 June 2026"
        },
        {
          id: 2,
          title: "Employee Dashboard",
          description: "Build React Employee Dashboard.",
          priority: "Medium",
          status: "Pending",
          dueDate: "30 June 2026"
        }
      ];
});
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
 const addTask = (newTask) => {
  setTasks([
    ...tasks,
    newTask
  ]);
};

const [editingTask, setEditingTask] = useState(null);
useEffect(() => {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
}, [tasks]);
// console.log(editingTask); 
const updateTask = (updatedTask) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === updatedTask.id) {
      return updatedTask;
    }

    return task;
  });

  setTasks(updatedTasks);
  setEditingTask(null);
};

const completeTask = (taskId) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === taskId) {
      return {
        ...task,
        status: "Completed"
      };
    }

    return task;
  });

  setTasks(updatedTasks);
};
const completedTasks = tasks.filter(
  (task) => task.status === "Completed"
).length;

const pendingTasks = tasks.filter(
  (task) => task.status === "Pending"
).length;

const filteredTasks = tasks.filter((task) => {

  const matchesSearch =
    task.title.toLowerCase().includes(
      searchTerm.toLowerCase()
    );

  if (filter === "Completed") {
    return matchesSearch &&
      task.status === "Completed";
  }

  if (filter === "Pending") {
    return matchesSearch &&
      task.status === "Pending";
  }

  if (filter === "High") {
    return matchesSearch &&
      task.priority === "High";
  }

  return matchesSearch;
});

const editTask = (task) => {
  
  setEditingTask(task);
};

const deleteTask = (taskId) => {
  const updatedTasks = tasks.filter(
    (task) => task.id !== taskId
  );

  setTasks(updatedTasks);
};

  return (
    <>
      <style>{`
        .db-page {
          background: #0E0F12;
          min-height: 100vh;
          padding-bottom: 60px;
        }
        .db-main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 28px 32px 0;
          display: flex;
          flex-direction: column;
          gap: 28px;
          box-sizing: border-box;
        }
        .db-content {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 24px;
          align-items: start;
        }
        .db-form-col {
          position: sticky;
          top: 24px;
        }
        .db-list-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 0;
        }
        .db-task-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .db-empty {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #5E626C;
          background: #15171c;
          border: 1px dashed #262932;
          border-radius: 8px;
          padding: 28px;
          text-align: center;
        }
        @media (max-width: 900px) {
          .db-content {
            grid-template-columns: 1fr;
          }
          .db-form-col {
            position: static;
          }
        }
        @media (max-width: 600px) {
          .db-main {
            padding: 20px 16px 0;
          }
        }
      `}</style>

      <Navbar />

      <div className="db-page">
        <main className="db-main">

          <DashboardStats
            totalTasks={tasks.length}
            completedTasks={completedTasks}
            pendingTasks={pendingTasks}
          />

          <div className="db-content">

            <aside className="db-form-col">
              <TaskForm
                addTask={addTask}
                updateTask={updateTask}
                editingTask={editingTask}
              />
            </aside>

            <section className="db-list-col">

              <FilterBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filter={filter}
                setFilter={setFilter}
              />

              <div className="db-task-list">
                {filteredTasks.length === 0 ? (
                  <p className="db-empty">No tasks match your filters.</p>
                ) : (
                  filteredTasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      description={task.description}
                      priority={task.priority}
                      status={task.status}
                      dueDate={task.dueDate}
                      onComplete={completeTask}
                      onDelete={deleteTask}
                      onEdit={editTask}
                    />
                  ))
                )}
              </div>

            </section>

          </div>

        </main>
      </div>
    </>
  );
}

export default Dashboard;