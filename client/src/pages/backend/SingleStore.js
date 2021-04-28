import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import GeneralInfo from '../../components/backend/single-store/GeneralInfo';
import SingleDayInfo from '../../components/backend/single-store/SingleDayInfo';
import TabNav from '../../components/backend/single-store/TabNav';
import Modal from '../../components/global/Modal';

// Utilities
import API from '../../utils/API';



export default function SingleStore() {

  const [restaurant, setRestaurant] = useState({})
  const [loading, setLoading] = useState(true)
  const [selectedTab, setSelectedTab] = useState('general-info')
  const [dayIndex, setDayIndex] = useState()
  const [modalPassAlongInfo, setModalPassAlongInfo] = useState({})
  const [show, setShow] = useState(false);

  // get slug from the URL
  const { slug } = useParams()

  // get restaurant info
  useEffect(() => {
    getAPI(slug)
  }, [])

  useEffect(() => {
    switch (selectedTab) {
      case "sunday":
        setDayIndex(0)
        break;
      case "monday":
        setDayIndex(1)
        break;
      case "tuesday":
        setDayIndex(2)
        break;
      case "wednesday":
        setDayIndex(3)
        break;
      case "thursday":
        setDayIndex(4)
        break;
      case "friday":
        setDayIndex(5)
        break;
      default:
        setDayIndex(6)
        break;
    }
  }, [selectedTab])

  // function to hit the API for this restaurant's info
  const getAPI = () => {
    API.getRestaurant(slug)
      .then(res => {
        setRestaurant(res.data)
        setLoading(false)
        console.log(res.data)

      }).catch(err => console.log(err))
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

    } else if (name === "hh-time") {
      let allHappyHour = restaurant.happyHour
      let thisHappyHour = allHappyHour[dayIndex]
      let thisHappyHourOptions = thisHappyHour.options[0]

      // update the base object with the new value
      thisHappyHourOptions = {
        ...thisHappyHourOptions,
        time: value
      }

      // modify the options for this happy hour - keep it as an array
      thisHappyHour = {
        ...thisHappyHour,
        options: [thisHappyHourOptions]
      }

      // need to modify allHappHour so it has the new listing for that day
      allHappyHour[dayIndex] = thisHappyHour

      // update the new info
      setRestaurant({
        ...restaurant,
        happyHour: allHappyHour


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
    } else if (name === 'hh-today-toggle') {
      let btnClicked = event.target.dataset.hhtoggle
      if (btnClicked === 'yes') {
        console.log(btnClicked)
        // if someone clicks this button, I need to populate the options for this HH with a standard string, like 'Insert data' but won't let it save if any of the fields have that
        let allHappyHour = restaurant.happyHour
        let thisHappyHour = allHappyHour[dayIndex]
        let thisHappyHourOptions = thisHappyHour.options[0]

        // update the base object with the new value
        thisHappyHourOptions = {
          ...thisHappyHourOptions,
          time: "?-?pm",
          drinks: ["$"],
          food: ["$"]
        }

        // modify the options for this happy hour - keep it as an array
        thisHappyHour = {
          ...thisHappyHour,
          options: [thisHappyHourOptions]
        }

        // need to modify allHappHour so it has the new listing for that day
        allHappyHour[dayIndex] = thisHappyHour

        // update the new info
        setRestaurant({
          ...restaurant,
          happyHour: allHappyHour


        })

      } else {
        let btnClicked = event.target.dataset.hhtoggle
        setModalPassAlongInfo({ btnClicked: btnClicked, name: name })
        setShow(true)
      }

    } else if (name === 'specials-today-toggle') {
      let btnClicked = event.target.dataset.toggle

      let allSpecials

    }
  }

  // this handles info from the Modal if someone wants to get rid of a HH or Special
  const handleClear = (input) => {
    console.log(input)
    console.log(input.name)

    if (input.name === "hh-today-toggle" && input.btnClicked === 'no') {
      let allHappyHour = restaurant.happyHour
      let thisHappyHour = allHappyHour[dayIndex]
      let thisHappyHourOptions = thisHappyHour.options[0]

      // update the base object with the new value
      thisHappyHourOptions = {
        ...thisHappyHourOptions,
        time: "",
        drinks: [],
        food: []
      }

      // modify the options for this happy hour - keep it as an array
      thisHappyHour = {
        ...thisHappyHour,
        options: [thisHappyHourOptions]
      }

      // need to modify allHappHour so it has the new listing for that day
      allHappyHour[dayIndex] = thisHappyHour

      // update the new info
      setRestaurant({
        ...restaurant,
        happyHour: allHappyHour


      })
    }

    setShow(false)
  }

  return (
    !loading &&
    <>
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
                <SingleDayInfo
                  restaurant={restaurant}
                  handleInputChange={handleInputChange}
                  toggleClick={toggleClick}
                  dayIndex={dayIndex}
                />
            }

          </div>


        </div>

      </div >


      <Modal open={show}>
        <h1 style={{ marginBottom: 25, textAlign: "center" }}>Hold up!</h1>
        <p style={{ marginBottom: 25, textAlign: "center" }}>If you continue, you'll erase your current info for this field. Click continue to erase your HH info for today.</p>
        <div className="modal-btn-container">
          <button type="button" onClick={() => setShow(false)}>Cancel</button>
          <button type="button" onClick={() => handleClear(modalPassAlongInfo)}>Continue</button>
        </div>
      </Modal>



    </>


  )
}
