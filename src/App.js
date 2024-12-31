
import { useState } from 'react';
import './App.css';
import Button from './components/Button';



function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }
  
  return (
    <div className="App">
     {/*  props passing function  */}
     <h1>{count}</h1>
     <Button handleClick={handleClick} text="click to PasspropsAsFunction">
     <h2>{count}</h2>
     </Button>
     <h3>{count}</h3>
     
    </div>
  );
}

export default App;
