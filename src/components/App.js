import React from "react";
import NewTask from "./NewTask.js";
import Tasks from "./Tasks.js";

function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <NewTask />
      <Tasks />
    </div>
  );
}

export default App;
