import React, { useState, useEffect } from "react";
import DashRestaurantCard from "../../components/backend/DashRestaurantCard";

import API from '../../utils/API'


export default function Admin() {
  const [allRestaurants, setAllRestaurants] = useState(undefined)

  useEffect(() => {
    getAPI()
  }, [])

  const getAPI = () => {
    API.getRestaurants()
      .then(res => {
        console.log("successful API hit")
        setAllRestaurants(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }



  return (
    <div className="backend-container">
      <div className="header-row">
        <h1>All Restaurants</h1>
        <p>Click a restaurant below to edit its information.</p>
      </div>
      <div className="results-container">
        {allRestaurants &&
          allRestaurants.map(card => {
            return <DashRestaurantCard
              key={card._id}
              slug={card.slug}
              name={card.name}
              neighborhood={card.location.city.neighborhood}
            />

          })
        }
      </div>
    </div>
  )
}
