import React from 'react'

export default function GeneralInfo(props) {

  // const [loading, setLoading] = useState(true)



  return (
    // !loading &&
    <form className="grid__general-info">
      {/* LOCATION INFO */}
      <h2 className="col-header">Location</h2>
      <div className="column-1 label">Street Address</div>
      <input type="text" className="column-2 info" value={props.restaurant.location.streetLineOne} name='streetLineOne' onChange={props.handleInputChange} />
      <div className="column-1 label">City</div>
      <input type="text" className="column-2 info" value={props.restaurant.location.city.name} name="name" onChange={props.handleInputChange} />
      <div className="column-1 label">Neighborhood</div>
      <input type="text" className="column-2 info" value={props.restaurant.location.city.neighborhood} name="neighborhood" onChange={props.handleInputChange} />
      <div className="column-1 label">Zip Code</div>
      <input type="text" className="column-2 info" value={props.restaurant.location.zip} onChange={props.handleInputChange} name="zip" />
      <div className="column-1 label">Phone</div>
      <input type="text" className="column-2 info" value={props.restaurant.location.phone} onChange={props.handleInputChange} name="phone" />

      {/* HOURS INFO */}
      <h2 className="col-header" style={{ marginTop: 25 }}>Hours</h2>
      <div className="column-1 label">Sunday</div>
      <input type="text" className="column-2 info" value={props.restaurant.location.hours[0].time} name="hour-0" onChange={props.handleInputChange} />
      <div className="column-1 label">Monday</div>
      <input type="text" className="column-2 info" value={props.restaurant.location.hours[1].time} name="hour-1" onChange={props.handleInputChange} />
      <div className="column-1 label">Tuesday</div>
      <input type="text" className="column-2 info" value={props.restaurant.location.hours[2].time} name="hour-2" onChange={props.handleInputChange} />
      <div className="column-1 label">Wednesday</div>
      <input type="text" className="column-2 info" value={props.restaurant.location.hours[3].time} name="hour-3" onChange={props.handleInputChange} />
      <div className="column-1 label">Thursday</div>
      <input type="text" className="column-2 info" value={props.restaurant.location.hours[4].time} name="hour-4" onChange={props.handleInputChange} />
      <div className="column-1 label">Friday</div>
      <input type="text" className="column-2 info" value={props.restaurant.location.hours[5].time} name="hour-5" onChange={props.handleInputChange} />
      <div className="column-1 label">Saturday</div>
      <input type="text" className="column-2 info" value={props.restaurant.location.hours[6].time} name="hour-6" onChange={props.handleInputChange} />

      {/* FEATURES INFO */}
      <h2 className="col-header" style={{ marginTop: 25 }}>Features</h2>

      {/* SPORTS INFO */}
      <div className="column-1 label">Sports Bar</div>
      <div className="column-2">
        <button
          type="button"
          className={props.restaurant.features.sports.sportsBar === true ? "yes-no-box selected" : "yes-no-box"}
          disabled={props.restaurant.features.sports.sportsBar === true ? true : false}
          onClick={props.toggleClick}
          name="sportsBar"
        >Yes</button>
        <button
          type="button"
          className={props.restaurant.features.sports.sportsBar === false ? "yes-no-box selected" : "yes-no-box"}
          disabled={props.restaurant.features.sports.sportsBar === false ? true : false}
          onClick={props.toggleClick}
          name="sportsBar"
        >No</button>
      </div>
      {/* GAMES INFO */}

      <div className="column-1 label">Games</div>
      <div className="column-2">
        <button
          type="button"
          className={props.restaurant.features.games.gamesBar === true ? "yes-no-box selected" : "yes-no-box"}
          disabled={props.restaurant.features.games.gamesBar === true ? true : false}
          onClick={props.toggleClick}
          name="gamesBar"
        >Yes</button>
        <button
          type="button"
          className={props.restaurant.features.games.gamesBar === false ? "yes-no-box selected" : "yes-no-box"}
          disabled={props.restaurant.features.games.gamesBar === false ? true : false}
          onClick={props.toggleClick}
          name="gamesBar"
        >No</button>
      </div>
      {/* MUSIC INFO */}

      <div className="column-1 label">Music</div>
      <div className="column-2">
        <button
          type="button"
          className={props.restaurant.features.music.liveMusic === true ? "yes-no-box selected" : "yes-no-box"}
          onClick={props.toggleClick}
          name="musicBar"
          data-music="liveMusic"
        >Live</button>
        <button
          type="button"
          className={props.restaurant.features.music.jukebox === true ? "yes-no-box selected" : "yes-no-box"}
          onClick={props.toggleClick}
          name="musicBar"
          data-music="jukebox"
        >Jukebox</button>
        <button
          type="button"
          className={props.restaurant.features.music.dj === true ? "yes-no-box selected" : "yes-no-box"}
          onClick={props.toggleClick}
          name="musicBar"
          data-music="dj"
        >DJ</button>
        <button
          type="button"
          className={props.restaurant.features.music.danceFloor === true ? "yes-no-box selected" : "yes-no-box"}
          onClick={props.toggleClick}
          name="musicBar"
          data-music="danceFloor"
        >Dance Floor</button>
      </div>
      {/* OUTDOOR SEATING INFO */}

      <div className="column-1 label">Outdoor Seating</div>
      <div className="column-2">
        <button
          type="button"
          className={props.restaurant.features.outdoorSeating === true ? "yes-no-box selected" : "yes-no-box"}
          disabled={props.restaurant.features.outdoorSeating === true ? true : false}
          onClick={props.toggleClick}
          name="outdoorSeating"
        >Yes</button>
        <button
          type="button"
          className={props.restaurant.features.outdoorSeating === false ? "yes-no-box selected" : "yes-no-box"}
          disabled={props.restaurant.features.outdoorSeating === false ? true : false}
          onClick={props.toggleClick}
          name="outdoorSeating"
        >No</button>
      </div>
      {/* TRIVIA INFO */}

      <div className="column-1 label">Trivia</div>
      <div className="column-2">
        <button
          type="button"
          className={props.restaurant.features.trivia.triviaBar === true ? "yes-no-box selected" : "yes-no-box"}
          disabled={props.restaurant.features.trivia.triviaBar === true ? true : false}
          onClick={props.toggleClick}
          name="triviaBar"

        >Yes</button>
        <button
          type="button"
          className={props.restaurant.features.trivia.triviaBar === false ? "yes-no-box selected" : "yes-no-box"}
          disabled={props.restaurant.features.trivia.triviaBar === false ? true : false}
          onClick={props.toggleClick}
          name="triviaBar"
        >No</button>
      </div>



    </form>

  )
}
