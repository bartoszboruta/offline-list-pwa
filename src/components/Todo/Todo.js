import React, { useContext } from 'react'
import classnames from 'classnames'

import { TodoContext } from './Context'

const Todo = ({ todo }) => {
  const { onRemoveTodo, onUpdateTodo } = useContext(TodoContext)
  const { done, title, updatedAt } = todo
  const titleClassName = classnames('todo__title', {
    checked: done,
  })

  const checkboxClassName = classnames('fa fa-check-circle', {
    checked: done,
  })

  return (
    <div className="todo">
      <div className="todo__date">{new Date(updatedAt).toLocaleDateString()}</div>
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
