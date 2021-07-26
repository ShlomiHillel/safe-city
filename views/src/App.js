import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState('')
  const fetch = async () => {
    const data = await axios.get("http://localhost:5000/api/users");
    console.log(data.data);
  };
  useEffect(() => {fetch()}, []);
  
  const handleSubmit = async () => {
    await axios.post('http://localhost:5000/api/users', {value})
  }
  
  let name = 'avi'


  return (
    <div className='main'>
      <header className='Main-header'>
      <h1>react(frontend)</h1>
      
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      
      <button onClick={handleSubmit}>post fixed</button>
      
      <button onClick={
        async()=> await axios.post('http://localhost:5000/shlomi', {name})
        }>click</button>

                
      </header>

    </div>
  );
}

export default App;



// eslint-disable-next-line no-lone-blocks
{/*   <img src={logo} className="App-logo" alt="logo" />
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a> 
*/}