import React from "react";
import TaskItem from "./TaskItem";

function Tasks(props) {
  // Order tasks by value
  props.items.sort((a, b) => parseFloat(a.value) - parseFloat(b.value));

  const deleteHandler = function (id) {
    props.onDeleteItem(id);
  };

  return (
    <ol>
      {props.items.map((task) => (
        <TaskItem
          key={task.id}
          title={task.task}
          value={task.value}
          onDelete={deleteHandler}
          id={task.id}
        />
      ))}
    </ol>
  );
}

export default Tasks;
