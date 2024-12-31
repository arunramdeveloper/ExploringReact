import React, { useContext } from 'react'
import { userContext } from '../../App'

export default function Checkout() {
   const {user} =   useContext(userContext);
   console.log("checkout page " + user);
  return (
    <div>Checkout as {user}</div>
  )
}
