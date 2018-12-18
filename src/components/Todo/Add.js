import React, { useContext, useState } from 'react'

import { TodoContext } from './Context'

const Add = () => {
  const { onAddTodo } = useContext(TodoContext)
  const [title, setTitle] = useState('')

  return (
    <div className="add">
      <div className="group">
        <input
          onChange={({ target: { value } }) => setTitle(value)}
          placeholder="New task"
          title="title"
          value={title}
        />
        <span className="highlight" />
        <span className="bar" />
      </div>

      <button
        className="btn"
        disabled={!title}
        onClick={() => {
          setTitle('')
          onAddTodo(title)
        }}
      >
        Add
      </button>
    </div>
  )
}

export default Add
