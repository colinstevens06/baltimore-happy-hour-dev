import React from 'react'

export default function SingleDayInfo(props) {





  return (

    <form className="grid__general-info">
      <h2 className="col-header">Happy Hour</h2>
      {/* HH TODAY??? */}
      <div className="column-1 label">HH today?</div>
      <div className="column-2">
        <button
          type="button"
          className={props.restaurant.happyHour[props.dayIndex].options[0].time.length >= 1 ? "yes-no-box selected" : "yes-no-box"}
          disabled={props.restaurant.happyHour[props.dayIndex].options[0].time.length >= 1 ? true : false}
          onClick={props.toggleClick}
          name="hh-today-toggle"
          data-hhtoggle="yes"

        >Yes</button>
        <button
          type="button"
          className={props.restaurant.happyHour[props.dayIndex].options[0].time.length === 0 ? "yes-no-box selected" : "yes-no-box"}
          disabled={props.restaurant.happyHour[props.dayIndex].options[0].time.length === 0 ? true : false}
          onClick={props.toggleClick}
          name="hh-today-toggle"
          data-hhtoggle="no"
        >No</button>
      </div>
      {/* HH # 1 */}
      {props.restaurant.happyHour[props.dayIndex].options[0].time.length >= 1 &&
        <>
          <h3 className="col-header">HH #1</h3>
          {/* TIME */}
          <div className="column-1 label">Time</div>
          <input type="text" className="column-2 info" value={props.restaurant.happyHour[props.dayIndex].options[0].time} name='hh-time' onChange={props.handleInputChange} />
          {/* DRINKS */}
          <div className="column-1 label">Drink</div>
          <div className="column-2">
            <button
              type="button"
              className={props.restaurant.happyHour[props.dayIndex].options[0].drinks.length >= 1 ? "yes-no-box selected" : "yes-no-box"}
              disabled={props.restaurant.happyHour[props.dayIndex].options[0].drinks.length >= 1 ? true : false}
              onClick={props.toggleClick}
              name="hh-drinks-toggle"
              data-toggle='yes'
            >Yes</button>
            <button
              type="button"
              className={props.restaurant.happyHour[props.dayIndex].options[0].drinks.length === 0 ? "yes-no-box selected" : "yes-no-box"}
              disabled={props.restaurant.happyHour[props.dayIndex].options[0].drinks.length === 0 ? true : false}
              onClick={props.toggleClick}
              name="hh-drinks-toggle"
              data-toggle='no'
            >No</button>
            <br style={{ clear: 'both' }} />
            {props.restaurant.happyHour[props.dayIndex].options[0].drinks.length >= 1 && (
              props.restaurant.happyHour[props.dayIndex].options[0].drinks.map((special, index) => {
                return <input className="column-2 info" style={{ marginTop: 5 }} type="text" value={special} key={index} data-index={index} name="hh-drinks" onChange={props.handleInputChange} />
              })
            )
            }

          </div>
          {/* FOOD */}
          <div className="column-1 label">Food</div>
          <div className="column-2">
            <button
              type="button"
              className={props.restaurant.happyHour[props.dayIndex].options[0].food.length >= 1 ? "yes-no-box selected" : "yes-no-box"}
              disabled={props.restaurant.happyHour[props.dayIndex].options[0].food.length >= 1 ? true : false}
              onClick={props.toggleClick}
              name="hh-food-toggle"
              data-toggle='yes'
            >Yes</button>
            <button
              type="button"
              className={props.restaurant.happyHour[props.dayIndex].options[0].food.length === 0 ? "yes-no-box selected" : "yes-no-box"}
              disabled={props.restaurant.happyHour[props.dayIndex].options[0].food.length === 0 ? true : false}
              onClick={props.toggleClick}
              name="hh-food-toggle"
              data-toggle='no'
            >No</button>
            {props.restaurant.happyHour[props.dayIndex].options[0].food.length >= 1 && (
              props.restaurant.happyHour[props.dayIndex].options[0].food.map((special, index) => {
                return <input className="column-2 info" style={{ marginTop: 5 }} type="text" value={special} key={index} data-index={index} name="hh-food" onChange={props.handleInputChange} />
              })
            )}

          </div>

        </>

      }

      {/* SPECIALS */}

      <h2 className="col-header">Specials</h2>
      <div className="column-1 label">Specials today?</div>
      <div className="column-2">
        <button
          type="button"
          className={props.restaurant.specials[props.dayIndex].options[0].items.length >= 1 ? "yes-no-box selected" : "yes-no-box"}
          disabled={props.restaurant.specials[props.dayIndex].options[0].items.length >= 1 ? true : false}
          onClick={props.toggleClick}
          name="specials-today-toggle"
          data-toggle="yes"
        >Yes</button>
        <button
          type="button"
          className={props.restaurant.specials[props.dayIndex].options[0].items.length === 0 ? "yes-no-box selected" : "yes-no-box"}
          disabled={props.restaurant.specials[props.dayIndex].options[0].items.length === 0 ? true : false}
          onClick={props.toggleClick}
          name="specials-today-toggle"
          data-toggle="no"
        >No</button>
      </div>
      {
        props.restaurant.specials[props.dayIndex].options[0].items.length >= 1 &&
        <>
          {/* SPECIAL 1 */}
          <h3 className="col-header">Special #1</h3>
          {/* NAME */}
          <div className="column-1 label">Name</div>
          <input
            type="text"
            className="column-2 info"
            value={props.restaurant.specials[props.dayIndex].options[0].name}
            onChange={props.handleInputChange}
            placeholder="Add a name for tonight's special"
            name="special-name"
          />
          <div className="column-1 label">Items</div>
          {
            props.restaurant.specials[props.dayIndex].options[0].items.map((item, index) => {
              return <input
                type="text"
                className="column-2 info"
                value={item}
                name='special-item'
                data-index={index}
                onChange={props.handleInputChange}
                placeholder="What's the special?" />
            })
          }

        </>
      }








    </form>

  )
}
