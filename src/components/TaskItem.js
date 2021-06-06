import React from "react";

function TaskItem(props) {
  return (
    <li className="li">
      <div className="task">
        <h3>{props.title}</h3>
        <button className="btn2">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
