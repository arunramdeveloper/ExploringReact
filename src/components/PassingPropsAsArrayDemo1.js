import React from 'react'

export default function PassingPropsAsArrayDemo1({fruitArray}) {
  return (
    <div>
        <h3>{'PassingPropsAsArrayDemo1'}</h3>
        <ul>
            {
                fruitArray.map((fruit, index)=>(
                <li key={index} >{fruit}</li>
            ))}
        </ul>

    </div>
  )
}
