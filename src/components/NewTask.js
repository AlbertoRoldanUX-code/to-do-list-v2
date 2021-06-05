import React, { useState } from "react";
import Form from "./Form.js";

function NewTask() {
  const [isEditing, setIsEditing] = useState(false);

  const clickHandler = function () {
    setIsEditing(true);
  };

  return (
    <div className="container">
      {!isEditing && (
        <div className="center">
          <button onClick={clickHandler} className="btn">
            Add New Task
          </button>
        </div>
      )}
      {isEditing && <Form />}
    </div>
  );
}

export default NewTask;
