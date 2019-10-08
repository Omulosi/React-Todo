import React, { Component } from 'react';
import { FaTimes } from "react-icons/fa";


export default class Todo extends Component {

  render() {
    const { todo, markComplete, deleteTask } = this.props;
    return (
      <div className="todo">
        <input type="checkbox" onClick={markComplete.bind(this, todo.id)}/>
        <p className={todo.completed?`mark-complete`: ''}>{todo.task}</p>
        <FaTimes onClick={deleteTask.bind(this, todo.id)}
        className="delete-btn" />
      </div>
    );
  }
}
