
import { useState } from 'react';
import './App.css';
import PassingProps from './components/PassingProps';


function App() {

  
  return (
    <div className="App">
     {/*  passing  props as children  */}
       <PassingProps   >
           <h2>children content 1</h2>
           <p>children content 2 </p>
            <button>children content 3</button>
       </PassingProps>
    </div>
  );
}

export default App;
