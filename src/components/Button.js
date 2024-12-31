import React from 'react'

export default function Button(props) {
  return (
    <div>
        {/* order of display   */}
      <h1>Receive props as function</h1>
        {props.children}
        <button onClick={props.handleClick} >
            {props.text}          
        </button>

    </div>
  )
}
