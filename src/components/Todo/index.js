import React, { Component } from 'react'

import Add from './Add'
import Filters from './Filters'
import List from './List'
import db from '../../utils/db'
import { TodoContext } from './Context'

class Container extends Component {
  state = {
    nameFilter: '',
    active: 0,
    done: 0,
    filteredTodos: [],
    todos: [],
  }

  componentDidMount = () => {
    this._getTodos()
  }

  _getTodos = () => {
    db
      .table('todos')
      .toArray()
      .then(todos => {
        this.setState({ todos }, () => {
          this._updateCounter()
          this._applyFilters()
        })
      })
  }

  _applyFilters = () => {
    const { nameFilter, todos } = this.state
    const filteredTodos = todos.filter(({ title }) => {
      return title.toLowerCase().includes(nameFilter.toLowerCase())
    })

    this.setState({ filteredTodos })
  }

  _handleNameFilterChange = ({ target: { value } }) => {
    this.setState({ nameFilter: value }, this._applyFilters)
  }

  _handleAddTodo = title => () => {
    const todo = {
      createdAt: new Date(),
      done: false,
      updatedAt: new Date(),
      title,
    }

    db
      .table('todos')
      .add(todo)
      .then(this._getTodos)
  }

  _handleUpdateTodo = ({ done, id }) => () => {
    db
      .table('todos')
      .update(id, { done: !done, updatedAt: new Date() })
      .then(this._getTodos)
  }

  _handleRemoveTodo = ({ id }) => () => {
    db
      .table('todos')
      .delete(id)
      .then(this._getTodos)
  }

  _updateCounter = () => {
    const { filteredTodos } = this.state
    const active = filteredTodos.filter(todo => !todo.done).length
    const done = filteredTodos.filter(todo => todo.done).length

    this.setState({ active, done })
  }

  render() {
    const { todos, filteredTodos } = this.state

    return (
      <TodoContext.Provider
        value={{
          filteredTodos,
          onAddTodo: this._handleAddTodo,
          onChangeNameFilter: this._handleNameFilterChange,
          onRemoveTodo: this._handleRemoveTodo,
          onUpdateTodo: this._handleUpdateTodo,
          todos,
        }}
      >
        <Add />
        <Filters />
        <List />
      </TodoContext.Provider>
    )
  }
}

export default Container
