import React from 'react'

const Active = () => {
  return (
    <div>
      <input defaultChecked name="activeFilter" type="radio" value="all" /> All
      <input name="activeFilter" type="radio" value="active" /> Active
      <input name="activeFilter" type="radio" value="done" /> Done
    </div>
  )
}

export default Active
