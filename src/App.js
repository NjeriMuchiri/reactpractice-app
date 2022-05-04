import './App.css';
import React, {useState} from 'react';


function App() {
      const [name,setName] = useState('');
      const [age,setAge] = useState(0);
      const [height,setHeight] = useState(0);
      const [superPower,setSuperPower] = useState('');
      const [displayCharacter, setDisplayCharacter] = useState(false);

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Build A Hero </h1>
      <div>
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
      </div>
      <button onClick={() => {
        setDisplayCharacter(true)
      }}
      >Display Character</button>
      <div>
        <h1 style={{textAlign: 'center'}}>Hero Info</h1>
        {displayCharacter && (
        <ul>
          <li>{name}</li>
          <li>{age}</li>
          <li>{height}</li>
          <li>{superPower}</li>
          
        </ul>
        )}
      </div>
    </div>
  );
}

export default App;
