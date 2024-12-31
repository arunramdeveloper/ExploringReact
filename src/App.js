
import { createContext, useState } from 'react';
import './App.css';
import Checkout from './components/contexthook/Checkout';
import Login from './components/contexthook/Login';
  //create context provide value
  export const userContext = createContext();
function App() {

const [user, setUser ] = useState("thanga");

  return (
    <div className="App">      
    <h1>{'use context hook demo' }</h1>
 
 {/* <input type='text' value={user} onChange={(e)=>setUser(e.target.value)} /> */}
     

    {console.log("before checkout page " + user)}
    <userContext.Provider value={{user, setUser}}>
    <Login />
        <Checkout />
        </userContext.Provider>
    </div>
  );
}

export default App;
