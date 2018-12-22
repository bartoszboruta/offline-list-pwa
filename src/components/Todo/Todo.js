import React, { useContext } from 'react'
import classnames from 'classnames'

import { TodoContext } from './Context'
import { dateDiffInDays, getExpireDateText } from '../../utils/parsers/date'

const Todo = ({ todo }) => {
  const { onRemoveTodo, onUpdateTodo } = useContext(TodoContext)
  const { done, expireDate, title } = todo
  const expireDays = dateDiffInDays(expireDate)
  const expireText = getExpireDateText(expireDays)

  const titleClassName = classnames('todo__title', {
    checked: done,
  })

  const checkboxClassName = classnames('fa fa-check-circle', {
    checked: done,
  })

  const dateClassName = classnames('todo__date', {
    expired: expireDays < 0 && !done,
    today: expireDays === 0,
    tomorrow: expireDays === 1,
  })

  return (
    <div className="todo">
      <div className={dateClassName}>{expireText}</div>
      <div className="todo__container">
        <i className="todo__remove fa fa-minus-circle" onClick={onRemoveTodo(todo)} />
        <div className={titleClassName}>{title}</div>
        <div className="todo__input">
          <label className="label">
            <input
              checked={done}
              className="label__checkbox"
              onChange={onUpdateTodo(todo)}
              type="checkbox"
            />
            <i className={checkboxClassName} />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Todo
