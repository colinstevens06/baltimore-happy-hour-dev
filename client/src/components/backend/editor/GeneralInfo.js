import React from 'react'

export default function GeneralInfo(props) {

  console.log(props)
  return (
    <form className="grid__general-info">
      {/* LOCATION INFO */}
      <h2 className="col-header">Location</h2>
      <div className="col-1 label">Street Address</div>
      <input type="text" className="col-2 info" value={props.restaurant.location.streetLineOne} />
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
        <button className="yes-no-box">Yes</button>
        <button className="yes-no-box selected">No</button>
      </div>
      <div className="col-1 label">Games</div>
      <div className="col-2">
        <button className="yes-no-box">Yes</button>
        <button className="yes-no-box selected">No</button>
      </div>
      <div className="col-1 label">Music</div>
      <div className="col-2">
        <div className="yes-no-box">Live</div>
        <div className="yes-no-box selected">Jukebox</div>
        <div className="yes-no-box">Dance Floor</div>
      </div>
      <div className="col-1 label">Outdoor Seating</div>
      <div className="col-2">
        <button className="yes-no-box selected">Yes</button>
        <button className="yes-no-box">No</button>
      </div>
      <div className="col-1 label">Trivia</div>
      <div className="col-2">
        <button className="yes-no-box">Yes</button>
        <button className="yes-no-box selected">No</button>
      </div>



    </form>

  )
}