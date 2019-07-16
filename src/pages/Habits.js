import React from "react";
import { Link } from "react-router-dom";

const Habits = props => {
  return (
    <tr>
      <td>{props.habit.description}</td>
      <td>{props.habit.completed}</td>
      <td>{props.habit.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + props.habit._id}>edit</Link>|
        <Link to={"/"} onClick={() => props.deleteHabit(props.habit._id)}>
          Delete
        </Link>
      </td>
    </tr>
  );
};

export default Habits;
