import React, { useState } from 'react'

export const Add = ({ onAddTodo }) => {
  const [title, setTitle] = useState('')

  return (
    <div>
      <input onChange={({ target: { value } }) => setTitle(value)} title="title" value={title} />
      <button onClick={onAddTodo(title)}>Add</button>
    </div>
  )
}

export default Add
