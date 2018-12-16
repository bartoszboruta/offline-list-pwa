import React from 'react'

const NameFilter = ({ onChangeNameFilter }) => {
  return (
    <div>
      <input onChange={onChangeNameFilter} />
    </div>
  )
}

export default NameFilter
