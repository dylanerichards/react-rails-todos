import React from "react"
import ReactDOM from "react-dom"
import TodoList from "./TodoList.js.jsx"
// import { createStore } from "redux"

// const reducer = (state, actions) => {
//   return state
// }

// const store = createStore(reducer)

// console.log(store);

class App extends React.Component {
  render() {
    return (
      <TodoList />
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />
    ,
    document.body.appendChild(document.createElement('div')),
  )
})
