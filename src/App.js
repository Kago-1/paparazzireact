import './App.css';
import {useState} from "react"


function App() {
  const [count,setCount] = useState(0)

  const handleClick = ()=>{setCount(count=>count+1)}
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>Counter</h1>
      </header>
      <button id='button' onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App;
