import { useState } from "react";
import Navbar from "../components/Navbar";
import DashboardStats from "../components/DashboardStats";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";

function Dashboard() {

  const [tasks, setTasks] = useState([

    
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
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
 const addTask = (newTask) => {
  setTasks([
    ...tasks,
    newTask
  ]);
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

const deleteTask = (taskId) => {
  const updatedTasks = tasks.filter(
    (task) => task.id !== taskId
  );

  setTasks(updatedTasks);
};
  return (
    <>
      <Navbar />
      <DashboardStats
  totalTasks={tasks.length}
  completedTasks={completedTasks}
  pendingTasks={pendingTasks}
/>
      <FilterBar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  filter={filter}
  setFilter={setFilter}
/>
      <TaskForm addTask={addTask} />
      
      {filteredTasks.map((task) => (
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
        />
      ))}
    </>
  );
}

export default Dashboard;