import React, { useContext } from 'react'

import { TodoContext } from '../Context'

const NameFilter = () => {
  const { onChangeNameFilter, nameFilter } = useContext(TodoContext)

  return (
    <div className="nameFilter">
      <div className="group">
        <input onChange={onChangeNameFilter} placeholder="Search" value={nameFilter} />
        <span className="highlight" />
        <span className="bar" />
      </div>
    </div>
  )
}

export default NameFilter
