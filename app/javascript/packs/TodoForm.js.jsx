console.log('Hello from TodoForm')

import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class TodoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      body: ""
    }
  }

  render() {
    return (
      <form onSubmit={() => this.props.handleSubmit(this.state.title, this.state.body)}>
        <label>
          Title:
          <input type="text" onChange={(e) => this.setState({ title: e.target.value })}/>
        </label>

        <label>
          Body:
          <input type="text" onChange={(e) => this.setState({ body: e.target.value })}/>
        </label>
        <span onClick={() => this.props.handleSubmit(this.state.title, this.state.body)}> Submit</span>
      </form>
    )
  }
}

export default TodoForm
