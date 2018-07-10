console.log('Hello from Todo')

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Todo = ({todo, toggleDone, remove}) => {
  const done = todo.done ? "done" : "incomplete"

  return (
    <div>
      <div className={ `todo ${done}` } onClick={() => toggleDone(todo.id)}>
        <h3 >{ todo.title }</h3>
        <p>{ todo.body }</p>

      </div>

      <button onClick={() => remove(todo.id)}>remove</button>
    </div>
  )
}

export default Todo
