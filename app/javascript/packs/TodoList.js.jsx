console.log('Hello from TodoList')

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Todo from './Todo.js.jsx'
import TodoForm from './TodoForm.js.jsx'
import axios from "axios"
import _ from "lodash"


class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get("/todos")
    .then((response) => {
      const todos = response.data.todos

      this.setState({ todos })
    })

  }

  handleSubmit = (title, body) => {
    axios.post(`/todos`, {
       todo: { title, body }
    })
      .then((response) => {
        this.setState((prevState) => {
          return { todos: [...prevState.todos, response.data.todo] }
        })
      })
  }

  removeTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)

    axios.delete(`/todos/${id}`)
      .then((response) => {
        this.setState({ todos })
      })

  }

  toggleDone = (id) => {
    const todo = this.state.todos.find(todo => todo.id === id)

    axios.put(`/todos/${id}`, {
      todo: { done: !todo.done }
    }).then((response) => {

      this.setState((prevState) => {
        const todos = prevState.todos.filter(todo => todo.id !== id)
        const todo = prevState.todos.find(todo => todo.id == id)

        todo.done = !todo.done

        const sorted = _.sortBy(todos.concat(todo), "id")

        return {todos: sorted}
      })

    });



  }

  render() {
    return (
      this.state.todos.length === 0
        ? <h2>Loading...</h2>
        : <div>
          <h1>Todos</h1>
          <TodoForm handleSubmit={this.handleSubmit} />

          {
            this.state.todos.map((todo) => {
              return (
                <Todo todo={todo} key={todo.id} toggleDone={this.toggleDone } remove={this.removeTodo}/>
                )
            })
          }

        </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TodoList />,
    document.body.appendChild(document.createElement('div')),
  )
})

export default TodoList
