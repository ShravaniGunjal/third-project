import logo from './logo.svg';
import './App.css';

function App() {
  const student = [
    {srno:1,name:'Shravani',marks:85},
    {srno:2,name:'Rutuja',marks:90},
    {srno:3,name:'Trusha',marks:83},
    {srno:4,name:'Shardul',marks:81},
    {srno:5,name:'Gaurav',marks:82},
    {srno:6,name:'Ayush',marks:80}
  ];
  return (
   <div>
    <table border="1">
      <tr>
        <th>srno</th>
        <th>name</th>
        <th>marks</th>
      </tr>
      {student.map((singleElement)=>
      <tr>
        <td>{singleElement.srno}</td>
        <td>{singleElement.name}</td>
        <td>{singleElement.marks}</td>
      </tr>
      )}
    </table>

   </div>
  );
}

export default App;
