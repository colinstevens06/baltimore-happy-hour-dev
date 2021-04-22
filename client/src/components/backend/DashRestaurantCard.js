import React from 'react'
import { Link } from 'react-router-dom'

export default function DashRestaurantCard(props) {
  return (
    <Link
      className="dash-card"
      to={"/content-management-system/" + props.slug}
    >
      <h2>{props.name}</h2>
      <p>{props.neighborhood}</p>
    </Link>
  )
}
