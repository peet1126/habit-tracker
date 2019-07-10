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

  render() {
    return (
      <div>
        <CreateTodo
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputTextName="text"
          value={this.state.todo}
        />
        <TodoItems />
      </div>
    );
  }
}

export default App;
