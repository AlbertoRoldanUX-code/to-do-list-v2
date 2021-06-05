import React from "react";

function Form() {
  return (
    <div>
      <form className="form">
        <div>
          <label className="label">Task</label>
          <textarea
            className="input1"
            name=""
            id=""
            cols="30"
            rows="3"
          ></textarea>
        </div>
        <div>
          <label className="label">
            How important is it in a scale of 1 to 10?
          </label>
          <input className="input2" type="number" min="0" max="10" />
        </div>
        <div>
          <label className="label">
            How urgent is it in a scale of 1 to 10?
          </label>
          <input className="input3" type="number" min="0" max="10" />
        </div>
        <div className="margin">
          <a className="btn" href="#tasks">
            Create task
          </a>
        </div>
      </form>
    </div>
  );
}

export default Form;
