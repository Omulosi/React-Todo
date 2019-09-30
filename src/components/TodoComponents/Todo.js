import React, { Component } from 'react';


export default class Todo extends Component {

  render() {
    const { todo, markComplete } = this.props;
    return (
      <div className="todo">
        <input type="checkbox" onClick={markComplete.bind(this, todo.id)}/>
        <p className={todo.completed?`mark-complete`: ''}>{todo.task}</p>
      </div>
    );
  }
}
