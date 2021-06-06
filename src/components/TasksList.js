import React from "react";
import TaskItem from "./TaskItem";

function Tasks(props) {
  // Order tasks by value
  props.items.sort((a, b) => parseFloat(a.value) - parseFloat(b.value));

  return (
    <ul>
      {props.items.map((task) => (
        <TaskItem key={task.id} title={task.task} value={task.value} />
      ))}
    </ul>
  );
}

export default Tasks;
