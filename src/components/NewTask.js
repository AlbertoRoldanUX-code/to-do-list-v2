import React from "react";
import Form from "./Form.js";

function NewTask() {
  return (
    <div className="firstDiv">
      <div>
        <button className="btn">Add New Task</button>
        <Form />
      </div>
    </div>
  );
}

export default NewTask;
