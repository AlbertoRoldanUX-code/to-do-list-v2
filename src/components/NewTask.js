import React, { useState } from "react";
import Form from "./Form.js";

function NewTask(props) {
  const [isEditing, setIsEditing] = useState(false);

  const clickHandler = function () {
    setIsEditing(true);
  };

  const stopEditingHandler = function () {
    setIsEditing(false);
  };

  const saveTaskDataHandler = function (enteredTaskData) {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    };

    props.onAddTask(taskData);
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
      {isEditing && (
        <Form
          onSaveTaskData={saveTaskDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewTask;
