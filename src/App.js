import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import tasks from './data';
import uuid from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleChange (event) {
    const newTask = {
      name: event.target.value,
      id: uuid(),
      completed: false
    }

    this.setState({tasks: [...tasks, newTask]});
  }

  render() {
    return (
      <div className='todolist-wrapper'>
        <header className="header">
          <h2>Welcome to your Todo App!</h2>
        </header>

        <aside className="aside">
          <ul className="menu-list">
            <li>Inbox <span>0</span></li>
            <li>Today <span>0</span></li>
            <li>Done <span>0</span></li>
            <li><span>+</span> New List</li>
          </ul>
        </aside>

        <main className="main-todo-list">
          <header className="todolist-header">
          </header>
          <section className="todolist-content">
            <TodoList tasks={tasks}/>
            <TodoForm className="todo-form" handleChange={this.handleChange}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
