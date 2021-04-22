import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

// Utilities
import API from '../../utils/API';

export default function SingleStore() {

  const [restaurant, setRestaurant] = useState({})
  const [currentTab, setCurrentTab] = useState("general-info")
  const [loading, setLoading] = useState(true)

  // info so I know what info to get
  const { slug } = useParams()

  // get restaurant info

  useEffect(() => {
    getAPI(slug)
  })

  // function to hit the API for this restaurant's info
  const getAPI = () => {
    API.getRestaurant(slug)
      .then(res => {
        setRestaurant(res.data)
        setLoading(false)

      })
      .catch(err => console.log(err))
  }




  return (
    !loading &&
    <div className="backend-container">
      <div className="header-row">
        <h1>{restaurant.name}</h1>
        <p>Click through the tabs to edit your information. Don’t forget to save!</p>
      </div>
      <div className="tabbed-content-container">
        <div className="tabs">

          <button className="active-tab">General Info</button>
          <button>Sunday</button>
          <button>Monday</button>
          <button>Tuesday</button>
          <button>Wednesday</button>
          <button>Thursday</button>
          <button>Friday</button>
          <button>Saturday</button>

        </div>
        <div>Placeholder</div>

      </div>

    </div>


  )
}
