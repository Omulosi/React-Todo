import React, { Component } from 'react';
import uuid from 'uuid';

export default class TodoForm extends Component {

  render() {
    const { handleChange, handleSubmit, task } = this.props;

    return (
      <form onSubmit={handleSubmit}>
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
