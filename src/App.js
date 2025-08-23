import logo from './logo.svg';
import './App.css';

function App() {
  const myObject = {
    name:"Shravani",
    age:20,
    college:"B.J.College,Ale"
  }
  return (
   <div>
    <h1><strong>Name:</strong>{myObject.name}</h1>
    <h2><strong>Age:</strong>{myObject.age}</h2>
    <h3><strong>College:</strong>{myObject.college}</h3>
   </div>
  );
}

export default App;
