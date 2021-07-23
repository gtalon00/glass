import React from 'react'

export default function Rooms({listOfRooms}) {
  return (
    <div>
        <h3>Rooms</h3>
      {listOfRooms &&
        listOfRooms.map((room) => (
          <div key={room.id}>
            <p>{room}</p>
          </div>
        ))}
    </div>
  )
}
