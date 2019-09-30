import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
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
            <TodoList />
            <TodoForm className="todo-form"/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
