import React, { useContext } from 'react'

import { TodoContext } from './Context'

const Counter = () => {
  const { done, active } = useContext(TodoContext)

  return (
    <div>
      <i>Done: {done}</i>
      <i>Active: {active}</i>
    </div>
  )
}

export default Counter
