import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import GeneralInfo from '../../components/backend/editor/GeneralInfo';
import TabNav from '../../components/backend/editor/TabNav';

// Utilities
import API from '../../utils/API';

export default function SingleStore() {

  const [restaurant, setRestaurant] = useState({})
  const [loading, setLoading] = useState(true)
  const [selectedTab, setSelectedTab] = useState('general-info')

  // get slug from the URL
  const { slug } = useParams()

  // get restaurant info

  useEffect(() => {
    getAPI(slug)
    console.log(slug)
  }, [])

  // function to hit the API for this restaurant's info
  const getAPI = () => {
    API.getRestaurant(slug)
      .then(res => {
        setRestaurant(res.data)
        setLoading(false)

      })
      .catch(err => console.log(err))
  }

  const tabChange = (input) => {
    setSelectedTab(input)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setRestaurant(
      {
        ...restaurant,
        location: {
          ...restaurant.location,
          [name]: value
        }
      })

    console.log(restaurant)




  }




  return (
    !loading &&
    <div className="backend-container">
      <div className="header-row">
        <h1>{restaurant.name}</h1>
        <p>Click through the tabs to edit your information. Don’t forget to save!</p>
      </div>
      <div className="tabbed-content-container">
        <TabNav tabChange={tabChange} />
        <div className="content-window">
          {
            selectedTab === 'general-info' ?
              <GeneralInfo
                restaurant={restaurant}
                handleInputChange={handleInputChange}
              /> :
              "Other Info"
          }

        </div>

      </div>

    </div>


  )
}
