import React from 'react';

function TaskItem(props) {
  const clickHandler = function () {
    props.onDelete(props.id);
  };

  return (
    <li className='li'>
      <div className='task'>
        <p>{props.title}</p>
        <button className='btn2' onClick={clickHandler}>
          <i className='fa fa-times' aria-hidden='true'></i>
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
