import React from 'react';
import Hero from './Components/Hero';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  return (
    <>
    <div className='App'>
    <div>
      <Hero />
    </div>
   <div>
     <TodoList />
   </div>
   </div>
    </>
  )
}

export default App