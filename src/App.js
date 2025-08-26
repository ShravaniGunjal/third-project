import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import { useState } from 'react';

function App() {
  const student = [
 'Shravani', 'Rutuja', 'Trusha', 'Gaurav', 'Shardul', 'Ayush', 'Anamika', 'Nikita', 'Apeksha', 'Ishwari'
 ]
  return (
    <div>
     <Greetings name={student}/>
    </div>
  );
}

export default App;
