import React from 'react'

import Todo from './Todo'

const List = ({ onRemoveTodo, onUpdateTodo, todos }) => {
  return todos.map(todo => (
    <Todo key={todo.id} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} todo={todo} />
  ))
}

export default List
