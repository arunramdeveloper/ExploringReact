import React from 'react'

export default function PassingProps(props) {
  return (
    <div>
      <h2>{PassingProps}</h2>
      <div>
         {props.children}
      </div>

    </div>
  )
}
