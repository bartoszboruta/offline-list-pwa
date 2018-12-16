import React, { useContext, useState } from 'react'

import { TodoContext } from './Context'

const Add = () => {
  const { onAddTodo } = useContext(TodoContext)
  const [title, setTitle] = useState('')

  return (
    <div>
      <input onChange={({ target: { value } }) => setTitle(value)} title="title" value={title} />
      <button disabled={!title} onClick={onAddTodo(title)}>
        Add
      </button>
    </div>
  )
}

export default Add
