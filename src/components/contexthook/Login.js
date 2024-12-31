import React, { useContext, useState } from 'react'
import { userContext } from '../../App';

export default function Login() {
    const [value, setValue] = useState("");
    const {user, setUser} =useContext(userContext);
    function handleSubmit(e){
        e.preventDefault();
        setUser(value);
    }
  return (
    <div>
        <h2>{'Login'}</h2>
        <form onSubmit={handleSubmit} >
            <input value={value}            
            onChange={(e)=>setValue(e.target.value)}
            type='text'
            />
            <button type='submit' >Login</button>
        </form>

    </div>
  )
}
