import logo from './logo.svg';
import './App.css';
import GreetingsBCA from './GreetingsBCA';
import GreetingsBCS from './GreetingsBCS';
import { useState } from 'react';

function App() {
  const student = [
    {Name:"Shravani", Dept:"BCA"},
    {Name:"Rutuja", Dept:"BCA"},
    {Name:"Trusha", Dept:"BCS"},
    {Name:"Gaurav", Dept:"BCS"},
    {Name:"Shardul", Dept:"BCS"},
    {Name:"Ayush", Dept:"BCS"},
 ];
  return (
    <div>
    {student.map((singleElement)=>(
      <div>
      {singleElement.Dept==="BCA"?
      <GreetingsBCA Name={singleElement.Name} Department={singleElement.Dept}/>: 
      <GreetingsBCS Name={singleElement.Name} Department={singleElement.Dept}/>}
      </div>
      ))}
    
    </div>
  );
}

export default App;
