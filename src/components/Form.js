import React, { useState } from "react";

function Form(props) {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredImportance, setEnteredImportance] = useState("");
  const [enteredUrgency, setEnteredUrgency] = useState("");

  const taskChangeHandler = function (event) {
    setEnteredTask(event.target.value);
  };
  const importanceChangeHandler = function (event) {
    setEnteredImportance(event.target.value);
  };
  const urgencyChangeHandler = function (event) {
    setEnteredUrgency(event.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    const taskData = {
      task: enteredTask,
      value: +enteredImportance + +enteredUrgency,
    };

    setEnteredImportance("");
    setEnteredTask("");
    setEnteredUrgency("");

    props.onSaveTaskData(taskData);

    props.onCreate();
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div>
        <label className="label">Task</label>
        <textarea
          className="input1"
          name=""
          id=""
          cols="30"
          rows="3"
          onChange={taskChangeHandler}
          value={enteredTask}
          required
        ></textarea>
      </div>
      <div>
        <label className="label">
          How important is it in a scale of 0 to 10?
        </label>

        <input
          onChange={importanceChangeHandler}
          className="input2"
          type="number"
          min="0"
          max="10"
          value={enteredImportance}
        />
      </div>
      <div>
        <label className="label">How urgent is it in a scale of 0 to 10?</label>

        <input
          onChange={urgencyChangeHandler}
          className="input3"
          type="number"
          min="0"
          max="10"
          value={enteredUrgency}
        />
      </div>
      <div className="margin">
        <button type="submit" className="btn">
          Create task
        </button>
        <button className="btn-cancel" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Form;
