import React, { useState, useEffect } from 'react'

export default function GeneralInfo(props) {

  const [thisInfo, setThisInfo] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setThisInfo(props.restaurant)
    setLoading(false)
    // setStreetAddress(props.restaurant.location.streetLineOne)


  }, [])

  // useEffect(() => {
  //   setLoading(false)

  // }, [thisInfo])




  // i have an object that has all the restaurant info

  // i want to update that info as the user updates the form

  // i want that form info to be a state object that is used to update the DB when the user clicks save

  // so I need to be able to handle input changes at the UI, and when the user updates that info, I need it to update the overarching object

  // what I need to do is figure out how to do it with one line, one input, and then it'll work for all of them

  // first hting i need to do is update the streetInfo, that lives in the overarching location branch of the main object



  return (
    !loading &&
    <form className="grid__general-info">
      {/* LOCATION INFO */}
      <h2 className="col-header">Location</h2>
      <div className="col-1 label">Street Address</div>
      <input type="text" className="col-2 info" value={props.restaurant.location.streetLineOne} name='streetLineOne' onChange={props.handleInputChange} />
      <div className="col-1 label">City</div>
      <input type="text" className="col-2 info" value={props.restaurant.location.city.name} />
      <div className="col-1 label">Neighborhood</div>
      <input type="text" className="col-2 info" value={props.restaurant.location.city.neighborhood} />
      <div className="col-1 label">Zip Code</div>
      <input type="text" className="col-2 info" value={props.restaurant.location.zip} />
      <div className="col-1 label">Phone</div>
      <input type="text" className="col-2 info" value={props.restaurant.location.phone} />

      {/* HOURS INFO */}
      <h2 className="col-header" style={{ marginTop: 25 }}>Hours</h2>
      <div className="col-1 label">Sunday</div>
      <input type="text" className="col-2 info" value={props.restaurant.location.hours[0].time} />
      <div className="col-1 label">Monday</div>
      <input type="text" className="col-2 info" value={props.restaurant.location.hours[1].time} />
      <div className="col-1 label">Tuesday</div>
      <input type="text" className="col-2 info" value={props.restaurant.location.hours[2].time} />
      <div className="col-1 label">Wednesday</div>
      <input type="text" className="col-2 info" value={props.restaurant.location.hours[3].time} />
      <div className="col-1 label">Thursday</div>
      <input type="text" className="col-2 info" value={props.restaurant.location.hours[4].time} />
      <div className="col-1 label">Friday</div>
      <input type="text" className="col-2 info" value={props.restaurant.location.hours[5].time} />
      <div className="col-1 label">Saturday</div>
      <input type="text" className="col-2 info" value={props.restaurant.location.hours[6].time} />

      {/* FEATURES INFO */}
      <h2 className="col-header" style={{ marginTop: 25 }}>Features</h2>

      <div className="col-1 label">Sports Bar</div>
      <div className="col-2">
        <button type="button" className={props.restaurant.features.sports.sportsBar === true ? "yes-no-box selected" : "yes-no-box"}>Yes</button>
        <button type="button" className={props.restaurant.features.sports.sportsBar === false ? "yes-no-box selected" : "yes-no-box"}>No</button>
      </div>
      <div className="col-1 label">Games</div>
      <div className="col-2">
        <button type="button" className={props.restaurant.features.games.gamesBar === true ? "yes-no-box selected" : "yes-no-box"}>Yes</button>
        <button type="button" className={props.restaurant.features.games.gamesBar === false ? "yes-no-box selected" : "yes-no-box"}>No</button>
      </div>
      <div className="col-1 label">Music</div>
      <div className="col-2">
        <button type="button" className={props.restaurant.features.music.liveMusic === true ? "yes-no-box selected" : "yes-no-box"}>Live</button>
        <button type="button" className={props.restaurant.features.music.jukebox === true ? "yes-no-box selected" : "yes-no-box"}>Jukebox</button>
        <button type="button" className={props.restaurant.features.music.dj === true ? "yes-no-box selected" : "yes-no-box"}>DJ</button>
        <button type="button" className={props.restaurant.features.music.danceFloor === true ? "yes-no-box selected" : "yes-no-box"}>Dance Floor</button>
      </div>
      <div className="col-1 label">Outdoor Seating</div>
      <div className="col-2">
        <button type="button" className={props.restaurant.features.outdoorSeating === true ? "yes-no-box selected" : "yes-no-box"}>Yes</button>
        <button type="button" className={props.restaurant.features.outdoorSeating === false ? "yes-no-box selected" : "yes-no-box"}>No</button>
      </div>
      <div className="col-1 label">Trivia</div>
      <div className="col-2">
        <button type="button" className={props.restaurant.features.trivia.triviaBar === true ? "yes-no-box selected" : "yes-no-box"}>Yes</button>
        <button type="button" className={props.restaurant.features.trivia.triviaBar === false ? "yes-no-box selected" : "yes-no-box"}>No</button>
      </div>



    </form>

  )
}
