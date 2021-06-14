import React, { useState } from "react";
import NewTask from "./components/NewTask.js";
import TasksList from "./components/TasksList.js";

function App() {
  const data = JSON.parse(localStorage.getItem("tasks"));

  const [tasks, setTasks] = useState(data);

  const addTaskHandler = function (task) {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };
  localStorage.setItem("tasks", JSON.stringify(tasks));

  const deleteItemHandler = function (taskId) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  console.log(tasks.sort((a, b) => parseFloat(b.value) - parseFloat(a.value)));

  return (
    <div>
      <h1>To Do List</h1>
      <NewTask onAddTask={addTaskHandler} />
      {tasks && <TasksList items={tasks} onDeleteItem={deleteItemHandler} />}
    </div>
  );
}

export default App;
