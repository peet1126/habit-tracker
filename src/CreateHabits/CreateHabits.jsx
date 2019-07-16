import React, { Component } from "react";

class CreateHabits extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <input
              name={this.props.inputTextName}
              onChange={this.props.handleChange}
              value={this.props.textValue}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateHabits;
