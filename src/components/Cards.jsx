import React from 'react'

const Cards = ({ cards }) => {
  //console.log(cards)
  return (
    <div>
      {cards && (<div>
        <h6>CARD</h6>
        <h1>{cards.name}</h1>
        <p>{cards.desc}</p>
      </div>)
      }
    </div>
  )
}

export default Cards