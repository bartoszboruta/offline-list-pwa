import React, { useContext, useState } from 'react'

import { TodoContext } from './Context'

const Add = () => {
  const { onAddTodo } = useContext(TodoContext)
  const [title, setTitle] = useState('')
  const [expireDate, setExpireDate] = useState('')

  const submit = () => {
    setTitle('')
    setExpireDate('')
    onAddTodo({ expireDate, title })
  }

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
      <div>
        <div className="group">
          <input
            onChange={({ target: { value } }) => setExpireDate(value)}
            type="date"
            value={expireDate}
          />
          <span className="highlight" />
          <span className="bar" />
        </div>
      </div>

      <button className="btn" disabled={!title} onClick={submit}>
        Add
      </button>
    </div>
  )
}

export default Add
