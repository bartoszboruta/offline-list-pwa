import React, { useContext } from 'react'
import classnames from 'classnames'

import { TodoContext } from './Todo/Context'

const Header = () => {
  const { active, filteredTodos, onToggle, showNameFilter, showAddField } = useContext(TodoContext)
  const searchClassName = classnames('fa fa-search icon', {
    active: showNameFilter,
  })
  const addClassName = classnames('fa fa-plus icon', {
    active: showAddField,
  })

  return (
    <div className="header">
      <i className={searchClassName} onClick={() => onToggle('showNameFilter')} />
      <div className="header__container">
        <i>Tasks</i>
        <i className="counter">
          {active} / {filteredTodos.length}
        </i>
      </div>
      <i className={addClassName} onClick={() => onToggle('showAddField')} />
    </div>
  )
}

export default Header
