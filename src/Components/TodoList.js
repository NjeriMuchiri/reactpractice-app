import React from 'react';
import './TodoList.css';

function TodoList() {


  return (
      <>
    <div className='todo_sect'>
      <h1 className='todo__header'>Todo List</h1>
      <div className='todo__task'>
          <input type="text" placeholder='Task...'/>
          <button className='todo__button'>Add Task</button>
      </div>
      <hr />

    </div>
      </>
  )
}

export default TodoList;