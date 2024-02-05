import React from 'react'
import './css/CoffeeCard.css'

const CoffeeCard = (props) => {
  return (
    <div className="coffee-card">
        <h2>{props.data.name}</h2>
        <p>{props.data.description}</p>
        <div>{props.data.amount_in_grams}</div>
        <h3>{props.data.price}</h3>
    </div>
  )
}

export default CoffeeCard