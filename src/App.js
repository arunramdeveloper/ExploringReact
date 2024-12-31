

import './App.css';
import PropsPassingAsObjectDemo1 from './components/PropsPassingAsObjectDemo1';





function App() {
 
  const users = [
    { Id: 1, name: "John Doe", city: "New York" },
    { Id: 2, name: "Jane Smith", city: "London" },
    { Id: 3, name: "Raj Kumar", city: "Chennai" },
  ];
  
  return (
    <div className="App">
     {/*  Passing props as Object to child component  */}
     <h1>{'passing user object as props '}</h1>
    <PropsPassingAsObjectDemo1 userArray={users}  />
      
    
    </div>
  );
}

export default App;
