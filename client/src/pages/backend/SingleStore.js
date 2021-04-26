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
    console.log(name)
    if (name === "streetLineOne" || name === "zip" || name === "phone") {
      console.log("if statement 1st arg")
      setRestaurant({
        ...restaurant,
        location: {
          ...restaurant.location,
          [name]: value
        }
      })
    } else if (name === "name" || name === "neighborhood") {
      console.log("else statement")
      setRestaurant({
        ...restaurant,
        location: {
          ...restaurant.location,
          city: {
            ...restaurant.location.city,
            [name]: value
          }
        }
      })
    } else if (name === "hour-0" || name === "hour-1" || name === "hour-2" || name === "hour-3" || name === "hour-4" || name === "hour-5" || name === "hour-6") {
      console.log("UPDATE HOURS")
      let index = name[name.length - 1]
      let allHours = restaurant.location.hours
      let theseHours = allHours[index]
      console.log(index)
      console.log("theseHours", theseHours)
      let newListing = {
        ...theseHours,
        time: value
      }
      console.log("newListing", newListing)

      allHours[index] = newListing

      console.log("allHours", allHours)


      setRestaurant({
        ...restaurant,
        location: {
          ...restaurant.location,
          hours: allHours
        }
      })

      console.log(restaurant)




    }
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
