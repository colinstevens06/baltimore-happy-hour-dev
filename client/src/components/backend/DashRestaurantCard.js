import React from 'react'

export default function DashRestaurantCard(props) {
  return (
    <div className="dash-card">
      <h2>{props.name}</h2>
      <p>{props.neighborhood}</p>
    </div>
  )
}
