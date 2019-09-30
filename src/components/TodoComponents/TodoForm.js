import React, { Component } from 'react';

export default class TodoForm extends Component {

  render() {
    const { handleChange, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="New Todo..." onChange={handleChange}/>
      </form>
    );
  }
}
