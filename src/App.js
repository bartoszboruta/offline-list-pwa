import React, { Component } from 'react'
import './App.css'

import db from './utils/db'
import Add from './components/Todo/Add'
import Counter from './components/Todo/Counter'
import Filters from './components/Todo/Filters'
import List from './components/Todo/List'

class App extends Component {
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

  _handleUpdateTodo = ({ done, id }) => {
    db
      .table('todos')
      .update(id, { done: !done, updatedAt: new Date() })
      .then(this._getTodos)
  }

  _handleRemoveTodo = ({ id }) => {
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
    const { active, done, filteredTodos } = this.state

    return (
      <div className="App">
        <Counter active={active} done={done} />
        <Add onAddTodo={this._handleAddTodo} />
        <Filters onChangeNameFilter={this._handleNameFilterChange} />
        <List
          onRemoveTodo={this._handleRemoveTodo}
          onUpdateTodo={this._handleUpdateTodo}
          todos={filteredTodos}
        />
      </div>
    )
  }
}

export default App
