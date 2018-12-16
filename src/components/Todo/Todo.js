import React, { useContext } from 'react'

import { TodoContext } from './Context'

const Todo = ({ todo }) => {
  const { onRemoveTodo, onUpdateTodo } = useContext(TodoContext)
  const { done, title, updatedAt } = todo

  return (
    <div>
      <div>
        <input checked={done} onChange={onUpdateTodo(todo)} type="checkbox" />
        <span>{title}</span>
        <button onClick={onRemoveTodo(todo)} type="button">
          Delete
        </button>
      </div>
      <i>Updated at: {new Date(updatedAt).toLocaleString()}</i>
    </div>
  )
}

export default Todo
