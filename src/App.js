

import './App.css';
import PassingPropsAsArrayDemo1 from './components/PassingPropsAsArrayDemo1';




function App() {
 
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  
  return (
    <div className="App">
     {/*  Passing props as array to child component  */}
    
       <PassingPropsAsArrayDemo1 fruitArray={fruits} />
    
    </div>
  );
}

export default App;
