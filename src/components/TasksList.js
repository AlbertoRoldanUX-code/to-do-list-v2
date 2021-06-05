import React from "react";

function Tasks(props) {
  console.log(props.items);
  return <ul>
      {props.items.map(task=>)}
  </ul>;
}

export default Tasks;
