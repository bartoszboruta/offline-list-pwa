import React, { useContext } from 'react'

import { TodoContext } from '../Context'

const NameFilter = () => {
  const { onChangeNameFilter } = useContext(TodoContext)

  return (
    <div>
      <input onChange={onChangeNameFilter} />
    </div>
  )
}

export default NameFilter
