import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Habits from "./Habits";


export default class HabitList extends Component {
  state = {
    habits: []
  };

  componentDidMount() {
    console.log("cdm");
    getHabit().then(results => {
      this.setState({
        habits: results
      });
    });
  }
  async deleteHabit(id) {
    console.log("did");
    try {
      const fetchPost = await fetch("/api/habits/delete/" + id);
      const data = await fetchPost.json();
      return await data;
    } catch (err) {
      console.log(err);
    }
  }

  handleDelete = async id => {
    console.log(id);
    await this.deleteHabit(id)
      .then(results => console.log(results))
      .catch(error => console.error(error));


    const newState = await getHabit()
      .then(results => {
        console.log("these are the truth", results);
        return results;
      })
      .catch(error => console.error(error));
    await this.setState({ habits: newState });
  };

  render() {
    const habitList = this.state.habits.map(currentHabit => {
      return (
        <Habits
          habit={currentHabit}
          deleteHabit={this.deleteHabit}
          key={currentHabit._id}
          handleDelete={this.handleDelete}
        />
      );
    });

    return (
      <div>
        <h3>All Habits</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Completed</th>
              <th scope="col">Date</th>
              <th />
            </tr>
          </thead>
          <tbody>{habitList}</tbody>
        </table>
      </div>
    );
  }
}

async function getHabit() {
  try {
    const fetchPost = await fetch("/api/habits/getAll");
    const data = await fetchPost.json();
    return await data;
  } catch (err) {
    console.log(err);
  }
}
