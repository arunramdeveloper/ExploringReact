

import './App.css';

import PropsAsFunctionDemo2 from './components/PropsAsFunctionDemo2';


function App() {
 
  function getData(){
    alert("Hello from app component");
  }
  
  return (
    <div className="App">
     {/*  props passing function  */}
     <PropsAsFunctionDemo2 data={getData} />
    
    </div>
  );
}

export default App;
