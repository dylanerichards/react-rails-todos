console.log('Hello from Todo')

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Todo = ({todo, toggleDone}) => {
  const done = todo.done ? "done" : "incomplete"

  return (
    <div className={ `todo ${done}` } onClick={() => toggleDone(todo.id)}>
      <h3>{ todo.title }</h3>
      <p>{ todo.body }</p>

    </div>
  )
}

export default Todo
