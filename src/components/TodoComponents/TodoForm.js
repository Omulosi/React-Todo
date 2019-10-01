import React, { Component } from 'react';

export default class TodoForm extends Component {

  render() {
    const { handleChange, handleSubmit, task } = this.props;

    return (
      <form onSubmit={handleSubmit}
            className="todo-form">
        <input 
          type="text" 
          placeholder="New Todo..." 
          onChange={handleChange}
          value={task.task}
        />
      </form>
    );
  }
}
