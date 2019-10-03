import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state={
    data: [{id: 1528817077286, task: "Organize Garage", completed: false,}, {id: 1528817084358, task: "Bake Cookies", completed: false,}, {id: Date.now(), task: "", completed: false,}]
  }

  handleChange = e => {
    console.log("handle changes")
  };

  handleSubmit = e => {
    console.log("handle submits")
  };

  clearCompleted = () => {
    console.log("clears completed")
  }

  handleDelete = id => {
    console.log(`"handles deletions of ${id}"`)
  }

  handleEdit = id => {
    console.log(`edits ${id}`)
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          task={this.state.task}
          completed={this.state.completed}
        />
        <TodoList
          task={this.state.task}
          clearCompleted={this.state.clearCompleted}
          handleDelete={this.state.handleDelete}
          handleEdit={this.state.handleEdit}
        />
      </div>
    );
  }
}

export default App;
