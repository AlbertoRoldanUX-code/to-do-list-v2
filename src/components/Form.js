import React from "react";

function Form() {
  return (
    <div class="firstDiv">
      <div>
        <h1>To Do List</h1>
        <form class="form">
          <div>
            <label class="label" for="">
              Task
            </label>
            <textarea
              class="input1"
              name=""
              id=""
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label class="label" for="">
              How important is it in a scale of 1 to 10?
            </label>
            <input class="input2" type="number" min="0" max="10" />
          </div>
          <div>
            <label class="label" for="">
              How urgent is it in a scale of 1 to 10?
            </label>
            <input class="input3" type="number" min="0" max="10" />
          </div>
          <div class="margin">
            <a class="btn" href="#tasks">
              Create task
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
