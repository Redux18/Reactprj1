
import React, { useState } from 'react';
import './App.css';

function App() {
  let time  =new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime =()=>{
    time  =new Date().toLocaleTimeString();
    setCtime(time); 

  };
  setInterval(UpdateTime,1000)

  return (
    <div className="App">

      <h2>My Simple Digital Watch using React!!</h2>

    <span> <h1 className="my">{ctime}</h1></span>
      {/* <button onClick={UpdateTime} >get Time</button> */}
     
      
    </div>

  );
}

export default App;
