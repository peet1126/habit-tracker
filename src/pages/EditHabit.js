import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateHabit extends Component {
  state = {
    description: "",
    deration: 0,
    date: new Date(),
    completed: false
  };

  onChangeDescription = event => {
    this.setState({
      description: event.target.value
    });
  };
  onChangeDate = date => {
    this.setState({
      date: date
    });
  };
  onChangeCompleted = event => {
    this.setState({
      completed: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const habit = {
      description: this.state.description,
      date: this.state.date,
      completed: this.state.completed
    };
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    };
    async function habitFetch(options) {
      try {
        const sendPost = await fetch("/api/habits/create", options);
        const postResults = await sendPost.json();
        return await postResults;
      } catch (err) {
        console.log(err);
      }
    }

    habitFetch(options).then(habitData => {
      console.log(habitData);
      this.setState({
        habits: [this.state.text, ...this.state.habits],
        text: ""
      });
    });

    console.log(habit);
    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Start Working On A New Habit</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Habit Description:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={this.onChangeCompleted}
            />
            <label className="form-check-label">
              Have you completed this habit today?
            </label>
          </div>
          <div className="form-group">
            <label>Date:</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

