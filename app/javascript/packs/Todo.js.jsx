console.log('Hello from Todo')

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Todo = ({todo, toggleDone, remove}) => {
  const done = todo.done ? "done" : "incomplete"

  return (
    <div className={ `todo ${done}` } >
      <h3 onClick={() => toggleDone(todo.id)}>{ todo.title }</h3>
      <p onClick={() => toggleDone(todo.id)}>{ todo.body }</p>
      <span onClick={() => remove(todo.id)}>remove</span>
    </div>
  )
}

export default Todo
