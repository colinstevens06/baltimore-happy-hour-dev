import React, { useState } from 'react'

export default function TabNav(props) {

  const [activeTab, setActiveTab] = useState("general-info")

  const changeTab = (input) => {
    switch (input) {
      case "sunday":
        setActiveTab("sunday")
        props.tabChange('sunday')
        break
      case "monday":
        setActiveTab("monday")
        props.tabChange('monday')
        break
      case "tuesday":
        setActiveTab("tuesday")
        props.tabChange('tuesday')
        break
      case "wednesday":
        setActiveTab("wednesday")
        props.tabChange('wednesday')
        break
      case "thursday":
        setActiveTab("thursday")
        props.tabChange('thursday')
        break
      case "friday":
        setActiveTab("friday")
        props.tabChange('friday')
        break
      case "saturday":
        setActiveTab("saturday")
        props.tabChange('saturday')
        break
      default:
        setActiveTab("general-info")
        props.tabChange('general-info')
    }
  }

  // when the page loads, I want it to show the general info tab

  // when someone clicks a button, it should remove the active class from the current one, then apply it to the next

  // when someone clicks a button, it should change the content shown below

  return (
    <div className="tabs">

      <button className={activeTab === "general-info" ? "active-tab" : ""} onClick={() => changeTab('general-info')}>General Info</button>
      <button className={activeTab === "sunday" ? "active-tab" : ""} onClick={() => changeTab('sunday')}>Sunday</button>
      <button className={activeTab === "monday" ? "active-tab" : ""} onClick={() => changeTab('monday')}>Monday</button>
      <button className={activeTab === "tuesday" ? "active-tab" : ""} onClick={() => changeTab('tuesday')}>Tuesday</button>
      <button className={activeTab === "wednesday" ? "active-tab" : ""} onClick={() => changeTab('wednesday')}>Wednesday</button>
      <button className={activeTab === "thursday" ? "active-tab" : ""} onClick={() => changeTab('thursday')}>Thursday</button>
      <button className={activeTab === "friday" ? "active-tab" : ""} onClick={() => changeTab('friday')}>Friday</button>
      <button className={activeTab === "saturday" ? "active-tab" : ""} onClick={() => changeTab('saturday')}>Saturday</button>

    </div>
  )
}
