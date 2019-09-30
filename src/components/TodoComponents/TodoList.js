import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {

  render() {
    const { tasks } = this.props;

    return (
      <div>
        {
          tasks.map(todo => (
            <Todo key={todo.id} todo={todo}/>
          ))
        }
      </div>
    );
  }
}
