import React, { Component } from 'react'

import Add from './Add'
import NameFilter from './Filters/NameFilter'
import Header from '../Header'
import List from './List'
import db from '../../utils/db'
import { TodoContext } from './Context'

class Container extends Component {
  state = {
    active: 0,
    done: 0,
    filteredTodos: [],
    nameFilter: localStorage.getItem('nameFilter') || '',
    showAddField: localStorage.getItem('showAddField') === 'true' ? true : false,
    showNameFilter: localStorage.getItem('showNameFilter') === 'true' ? true : false,
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
        this.setState(
          {
            todos: todos.sort((prev, next) => {
              return next.id - prev.id
            }),
          },
          () => {
            // this._updateCounter()
            this._applyFilters()
          },
        )
      })
  }

  _handleAddTodo = ({ expireDate, title }) => {
    const todo = {
      createdAt: new Date(),
      done: false,
      expireDate,
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

  _applyFilters = () => {
    const { nameFilter, todos } = this.state
    const filteredTodos = todos.filter(({ title }) => {
      return title.toLowerCase().includes(nameFilter.toLowerCase())
    })

    this.setState({ filteredTodos })
  }

  _handleNameFilterChange = ({ target: { value } }) => {
    this.setState({ nameFilter: value }, () => {
      localStorage.setItem('nameFilter', value)
      this._applyFilters()
    })
  }

  _handleToggle = toggleName => {
    if (!toggleName) {
      return
    }

    const _toggleValue = this.state[toggleName]

    this.setState({ [toggleName]: !_toggleValue }, () => {
      localStorage.setItem(toggleName, !_toggleValue)

      if (toggleName === 'showNameFilter' && _toggleValue) {
        this._handleNameFilterChange({ target: { value: '' } })
      }
    })
  }

  _updateCounter = () => {
    const { filteredTodos } = this.state
    const active = filteredTodos.filter(todo => !todo.done).length
    const done = filteredTodos.filter(todo => todo.done).length

    this.setState({ active, done })
  }

  render() {
    const { nameFilter, todos, filteredTodos, showNameFilter, showAddField } = this.state

    return (
      <TodoContext.Provider
        value={{
          filteredTodos,
          nameFilter,
          onAddTodo: this._handleAddTodo,
          onChangeNameFilter: this._handleNameFilterChange,
          onRemoveTodo: this._handleRemoveTodo,
          onToggle: this._handleToggle,
          onUpdateTodo: this._handleUpdateTodo,
          showAddField,
          showNameFilter,
          todos,
        }}
      >
        <Header />
        <div className="container">
          <div>
            {showNameFilter && <NameFilter />}
            {showAddField && <Add />}
          </div>
          <List />
        </div>
      </TodoContext.Provider>
    )
  }
}

export default Container
