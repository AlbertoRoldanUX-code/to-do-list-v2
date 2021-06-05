import React, { useState } from "react";
import NewTask from "./components/NewTask.js";
import Tasks from "./components/TasksList.js";

const data = JSON.parse(localStorage.getItem("tasks"));

function App() {
  const [tasks, setTasks] = useState(data);

  const addTaskHandler = function (task) {
    console.log(task);
    localStorage.setItem("tasks", JSON.stringify(task));
  };

  return (
    <div>
      <h1>To Do List</h1>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks items={Object.values(tasks)} />
    </div>
  );
}

export default App;
