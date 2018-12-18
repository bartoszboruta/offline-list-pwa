import React, { useContext } from 'react'

import Todo from './Todo'
import { TodoContext } from './Context'

const List = () => {
  const { filteredTodos } = useContext(TodoContext)

  return <div className="list">{filteredTodos.map(todo => <Todo key={todo.id} todo={todo} />)}</div>
}

export default List
