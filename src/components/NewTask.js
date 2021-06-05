import React from "react";
import Form from "./Form.js";

function NewTask() {
  return (
    <div>
      <div>
        <button className="btn">Add New Task</button>
      </div>
      <Form />
    </div>
  );
}

export default NewTask;
