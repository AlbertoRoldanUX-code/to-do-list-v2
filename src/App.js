import React, { useState } from "react";
import NewTask from "./components/NewTask.js";
import TasksList from "./components/TasksList.js";

function App() {
  const [tasks, setTasks] = useState("");

  const addTaskHandler = function (task) {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  return (
    <div>
      <h1>To Do List</h1>
      <NewTask onAddTask={addTaskHandler} />
      <TasksList items={Object.values(tasks)} />
    </div>
  );
}

export default App;
