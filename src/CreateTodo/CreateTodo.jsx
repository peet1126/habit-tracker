import React, { Component } from "react";

class CreateTodo extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <input
              name={this.props.inputTextName}
              onChange={this.props.handleChange}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateTodo;
