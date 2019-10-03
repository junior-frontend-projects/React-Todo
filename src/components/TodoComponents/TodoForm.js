import React, { Component } from 'react'

export default class TodoForm extends Component {
  render() {
    const {task, handleChange, handleSubmit, completed} = this.props;

    return (
      <div>
        <h2>Todo Form</h2>
        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Add tasks here"
            value={task}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
