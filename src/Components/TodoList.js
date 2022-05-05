import React, {useState,useRef} from 'react';
import './TodoList.css';

function TodoList() {
   const[todoList,setTodoList] = useState([]);
   const [currentTask, setCurrentTask] = useState('');

   const inputTask = useRef(null);

   const addTask = () =>{
    setTodoList([...todoList, {task: currentTask, completed:false}])
    inputTask.current.value = "  ";
    setCurrentTask('')
   };

     const clearTask = (taskToClear) => {
       setTodoList(todoList.filter((task) => {
         return task.task !== taskToClear;
       }));
     };

      const doneTask = (taskDone) => {
       setTodoList(todoList.map((task) => {
         return task.task === taskDone ? {task: taskDone, completed:true} : {task: task.task,completed: task.completed ? true : false};
       }));
     };

  return (
      <>
    <div className='todo_sect'>
      <h1 className='todo__header'>Todo List</h1>
      <div className='todo__task'>
          <input 
          ref = {inputTask}type="text" placeholder='Task...'
          onKeyDown={(event) => { if (event.keyCode === 13 ) {addTask()}
        }}
          onChange={(event) =>{
              setCurrentTask(event.target.value)
          }}
          />
          <button 
          onClick = {addTask} className='todo__button'>Add Task</button>
      </div>
      <ul className='todolist__list'>
        {todoList.map((val, key) =>{
          return (
          <div id="our_task">
          <li key = {key}>
            {val.task}
          </li>
          <button
          onClick={() => doneTask(val.task)}
          className='tododone_button'>Done</button>
          <button className='toclear_button'
          onClick={() => clearTask(val.task)}
          >Clear</button>
          {val.completed ? 
          (<h1 className='donetask'>Task is done</h1> ): (<h1 className='donetask'>Task is not done</h1>)}
          </div>
          )
        })}
      </ul>
    </div>
      </>
  )
}

export default TodoList;