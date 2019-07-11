import React, { Component } from "react";
import CreateTodo from "./CreateTodo/CreateTodo";
import TodoItems from "./TodoItems/TodoItems";

class App extends Component {
  state = {
    completed: false,
    todo: [],
    text: ""
  };

  componentDidMount() {
    console.log("component did mount");
  }

  handleChange = event => {
    console.log(event.currentTarget.name);
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      todo: [this.state.text, ...this.state.todo],
      text: ""
    });
  };

  deleteTodo = id => {
    console.log(this.state.todo[id]);
    const newTodos = this.state.todo.filter(todo => {
      return this.state.todo[id] !== todo;
    });
    this.setState({ todo: newTodos });
  };

  render() {
    return (
      <div className="App">
        <CreateTodo
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputTextName="text"
          textValue={this.state.text}
        />
        <TodoItems
          todo={this.state.todo}
          deleteTodo={this.deleteTodo}
          value={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
