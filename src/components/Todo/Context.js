import React from 'react'

export const TodoContext = React.createContext({
  active: 0,
  done: 0,
  filteredTodos: [],
  nameFilter: '',
  onAddTodo: () => {},
  onChangeNameFilter: () => {},
  onRemoveTodo: () => {},
  onUpdateTodo: () => {},
  todos: [],
})
