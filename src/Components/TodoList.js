import React, {useState,useRef} from 'react';
import './TodoList.css';

function TodoList() {
   const[todoList,setTodoList] = useState([]);
   const [currentTask, setCurrentTask] = useState('');

   const inputTask = useRef(null)

   const addTask = () =>{
    setTodoList([...todoList, currentTask])
    inputTask.current.value = "  ";
    setCurrentTask('')
   }

  return (
      <>
    <div className='todo_sect'>
      <h1 className='todo__header'>Todo List</h1>
      <div className='todo__task'>
          <input 
          ref = {inputTask}type="text" placeholder='Task...'
          onChange={(event) =>{
              setCurrentTask(event.target.value)
          }}
          />
          <button 
          onClick = {addTask} className='todo__button'>Add Task</button>
      </div>
      <ul className='todolist__list'>
        {todoList.map((val, index) =>{
          return <li key = {index}>
            {val}
          </li>
        })}
      </ul>
    </div>
      </>
  )
}

export default TodoList;