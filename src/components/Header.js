import React, { useContext } from 'react'
import classnames from 'classnames'

import { TodoContext } from './Todo/Context'

const Header = () => {
  const { showNameFilter, showAddField, onToggle } = useContext(TodoContext)
  const searchClassName = classnames('fas fa-search icon', {
    active: showNameFilter,
  })
  const addClassName = classnames('fas fa-plus icon', {
    active: showAddField,
  })

  return (
    <div className="header">
      <i className={searchClassName} onClick={() => onToggle('showNameFilter')} />
      <i>Tasks</i>
      <i className={addClassName} onClick={() => onToggle('showAddField')} />
    </div>
  )
}

export default Header
