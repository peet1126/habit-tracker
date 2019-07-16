import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Habits from "./Habits";
// import axios from "axios";

// const Habit = props => (
//   <tr>
//     <td>{props.habits.description}</td>
//     <td>{props.habits.completed}</td>
//     <td>{props.habits.date.substring(0, 10)}</td>
//     <td>
//       <Link to={"/edit/" + props.habit._id}>edit</Link>|
//       <Link
//         to={"/"}
//         onClick={() => {
//           props.deleteHabit(props.habit._id);
//         }}
//       >
//         Delete
//       </Link>
//     </td>
//   </tr>
// );

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

  

  render() {
    const habitList = this.state.habits.map(currentHabit => {
      return (
        <Habits
          habit={currentHabit}
          deleteHabit={this.deleteHabit}
          key={currentHabit._id}
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
