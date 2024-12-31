import React from 'react'

export default function PropsPassingAsObjectDemo1({userArray}) {
  return (
    <div>
     <h3>{'Props receiving user object as props'}</h3>

     <table border="1" style={{ width: "50%", margin: "auto", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {userArray.map((user) => (
          <tr key={user.Id}>
            <td>{user.Id}</td>
            <td>{user.name}</td>
            <td>{user.city}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
  )
}
