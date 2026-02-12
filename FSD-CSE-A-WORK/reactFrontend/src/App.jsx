import React from 'react'
import { useState } from 'react';
import Card from './components/Card';


const App = () => {
  const [data, setData]= useState([]);
  const getData = async() =>{
    const response = await fetch('http://localhost:4005/data',{method:'POST'});
    const res = await response.json();
    setData(res.msg);
    console.log(res)
    
  }
  return (
    <div>
      <button onClick={getData}>click me to get data</button>
      
      
      {/* {JSON.stringify(data)} */}
      <div id='container'>

        {data.map((d,id) => <Card key = {id} title = {d.title} img = {d.image}/>)}
      </div>
    </div>
  )
}

export default App
