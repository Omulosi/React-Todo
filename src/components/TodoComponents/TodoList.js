import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {

  render() {
    const { todoItems } = this.props;

    return (
      <div>
        {
          todoItems.map(todo => (
            <Todo />
          ))
        }
      </div>
    );
  }
}
