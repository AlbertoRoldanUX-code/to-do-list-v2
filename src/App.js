import React from "react";
import NewTask from "./components/NewTask.js";
import Tasks from "./components/Tasks.js";

function App() {
  const addTaskHandler = function (task) {
    console.log(task);
    // localStorage.setItem("tasks", JSON.stringify(task));
  };

  return (
    <div>
      <h1>To Do List</h1>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks />
    </div>
  );
}

export default App;
