import React from 'react'

const Counter = ({ done, active }) => {
  return (
    <div>
      <i>Done: {done}</i>
      <i>Active: {active}</i>
    </div>
  )
}

export default Counter
