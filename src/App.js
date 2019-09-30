import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import tasks from './data';
import uuid from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [...tasks],
      task: {task: '', id: null, completed: false},
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const newTask = {
      task: event.target.value,
      id: uuid(),
      completed: false
    }

    this.setState({...this.state, task: newTask});
  }

  handleSubmit (event) {
    event.preventDefault();
    const tasks = [...this.state.tasks, this.state.task];
    const clearedTask = {task: '', id: null, completed: false};
    this.setState({tasks: tasks, task: clearedTask});
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
            <TodoList tasks={this.state.tasks}/>
            <TodoForm 
              className="todo-form" 
              handleChange={this.handleChange}
              task={this.state.task}
              handleSubmit={this.handleSubmit}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
