import './App.css';
import React, {useState} from 'react';


function App() {
      const [name,setName] = useState('');
      const [age,setAge] = useState(0);
      const [height,setHeight] = useState(0);
      const [superPower,setSuperPower] = useState('');


  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Build A Hero </h1>
      <label>Name: </label>
      <input type="text" style={{margin: 5}} 
      onChange={(event) => 
      {
        setName(event.target.value)
        }}
        /> 
      <label>Age: </label>
      <input type="number" style={{margin: 5}}
      onChange={(event) => 
      {
        setAge(event.target.value)
        }}
        /> 
      <label>Height: </label>
      <input type="number"  style={{margin: 5}}
         onChange={(event) => 
      {
        setHeight(event.target.value)
        }}
      />
      <label>Superpower: </label>
      <input type="text" style={{ margin: 5}}
         onChange={(event) => 
      {
        setSuperPower(event.target.value)
        }}
      />
      {name}
      {age}
      {height}
      {superPower}
    </div>
  );
}

export default App;
