import React from 'react'

export default function PropsAsFunctionDemo2(props) {
  return (
    <div>
        <h3>{PropsAsFunctionDemo2}</h3>
        <button onClick={props.data} >Click to call prop as function</button>


    </div>
  )
}
