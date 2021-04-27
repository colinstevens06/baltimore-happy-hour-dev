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
  }, [])

  // function to hit the API for this restaurant's info
  const getAPI = () => {
    API.getRestaurant(slug)
      .then(res => {
        setRestaurant(res.data)
        setLoading(false)
        console.log(res.data)

      })
      .catch(err => console.log(err))
  }

  const tabChange = (input) => {
    setSelectedTab(input)
  }

  const handleInputChange = (event) => {
    // getting info from the input section of the HTML
    const { name, value } = event.target;

    // conditionals based on which input is changing, we need to update different sections of the API
    if (name === "streetLineOne" || name === "zip" || name === "phone") {
      setRestaurant({
        ...restaurant,
        location: {
          ...restaurant.location,
          [name]: value
        }
      })
    } else if (name === "name" || name === "neighborhood") {
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
      let index = name[name.length - 1]
      let allHours = restaurant.location.hours
      let theseHours = allHours[index]
      let newListing = {
        ...theseHours,
        time: value
      }

      allHours[index] = newListing

      setRestaurant({
        ...restaurant,
        location: {
          ...restaurant.location,
          hours: allHours
        }
      })

    }
  }

  // these are toggles for true/false fields in the API
  const toggleClick = (event) => {
    event.preventDefault()
    const { name } = event.target

    if (name === "sportsBar") {
      let newValue = !restaurant.features.sports.sportsBar

      setRestaurant({
        ...restaurant,
        features: {
          ...restaurant.features,
          sports: {
            ...restaurant.features.sports,
            sportsBar: newValue
          }
        }

      })
    } else if (name === "gamesBar") {
      console.log("gamesBar")
      let newValue = !restaurant.features.games.gamesBar

      setRestaurant({
        ...restaurant,
        features: {
          ...restaurant.features,
          games: {
            ...restaurant.features.games,
            gamesBar: newValue
          }
        }

      })
    } else if (name === "outdoorSeating") {
      let newValue = !restaurant.features.outdoorSeating

      setRestaurant({
        ...restaurant,
        features: {
          ...restaurant.features,
          outdoorSeating: newValue
        }

      })
    } else if (name === 'triviaBar') {
      let newValue = !restaurant.features.trivia.triviaBar

      setRestaurant({
        ...restaurant,
        features: {
          ...restaurant.features,
          trivia: {
            ...restaurant.features.trivia,
            triviaBar: newValue
          }
        }

      })
    } else if (name === 'musicBar') {
      console.log(event.target.dataset.music)
      let btnClicked = event.target.dataset.music
      if (btnClicked === "liveMusic") {
        let newValue = !restaurant.features.music.liveMusic

        setRestaurant({
          ...restaurant,
          features: {
            ...restaurant.features,
            music: {
              ...restaurant.features.music,
              liveMusic: newValue
            }
          }

        })
      } else if (btnClicked === "jukebox") {
        let newValue = !restaurant.features.music.jukebox

        setRestaurant({
          ...restaurant,
          features: {
            ...restaurant.features,
            music: {
              ...restaurant.features.music,
              jukebox: newValue
            }
          }

        })
      } else if (btnClicked === "dj") {
        let newValue = !restaurant.features.music.dj

        setRestaurant({
          ...restaurant,
          features: {
            ...restaurant.features,
            music: {
              ...restaurant.features.music,
              dj: newValue
            }
          }

        })
      } else if (btnClicked === "danceFloor") {
        let newValue = !restaurant.features.music.danceFloor

        setRestaurant({
          ...restaurant,
          features: {
            ...restaurant.features,
            music: {
              ...restaurant.features.music,
              danceFloor: newValue
            }
          }

        })
      }
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
                toggleClick={toggleClick}
              /> :
              "Other Info"
          }

        </div>

      </div>

    </div>


  )
}
