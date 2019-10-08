import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import uuid from 'uuid';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      tasks: [],
      task: {task: '', id: null, completed: false},
      searchResult: [],
      query: ''
    }
    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.clearTasks = this.clearTasks.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.getState = this.getState.bind(this);
  }

  getState() {
    const state = localStorage.getItem('todos')?
      JSON.parse(localStorage.getItem('todos')):
      this.initialState;
    return state;
  }

  storeState(state) {
    localStorage.setItem('todos', JSON.stringify(state));
  }

  componentDidMount() {
    const state = this.getState();
    this.setState(state);
  }

  deleteTask (id) {
    const updatedState = {...this.state, tasks: [...this.state.tasks.filter(
      todo => todo.id !== id
    )]} 
    this.setState(updatedState);
    this.storeState(updatedState);
  }

  clearTasks () {
    const updatedState = {...this.state, tasks: []}
    this.setState(updatedState);
    this.storeState(updatedState);
  }


  markComplete (id) {
    // Loop through all the tasks and update the completed property of
    // task with a matching id to true
    const updatedState = {...this.state, 
      tasks: this.state.tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    })}
    this.setState(updatedState);
    this.storeState(updatedState);
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
    const newState = { ...this.state, tasks: tasks, task: clearedTask }
    this.setState(newState);
    this.storeState(newState);
  }

  handleQuery(event) {
    const query = event.target.value;
    this.setState({...this.state, query, 
      searchResult: [...this.state.tasks.filter(
      todo => todo.task.includes(query)
    )]});
  }

  render() {
    const tasks = this.state.query?
      this.state.searchResult: 
      this.state.tasks;

    return (
      <div className='todolist-wrapper'>
        <header className="top-header">
          <h2>Welcome to your Todo App!</h2>
          <p>Break your goals into manageable pieces</p>
        </header>

        <div className="main-content">
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
              <input type="text" name="query"
                onChange={this.handleQuery}
                placeholder="Search"
                className="search-todolist"
              />
              <button onClick={this.clearTasks}>Clear Todo List</button>
            </header>
            <section className="todolist-content">
              <div className="todolist-items">
                <TodoList 
                  tasks={tasks} 
                  markComplete={this.markComplete} 
                  deleteTask={this.deleteTask}
                />
              </div>
              <TodoForm 
                handleChange={this.handleChange}
                task={this.state.task}
                handleSubmit={this.handleSubmit}/>
            </section>
          </main>
      </div>
      </div>
    );
  }
}

export default App;
