import React from "react";

const HabitsItems = ({ habits, deleteHabit }) => {
  const habitList = habits.length ? (
    habits.map((habits, id) => {
      return (
        <li className="habit-item" key={id}>
          <span
            onClick={() => {
              deleteHabit(id);
            }}
          >
            {habits}
          </span>
        </li>
      );
    })
  ) : (
    <p>You are all done</p>
  );
  return (
    <div>
      <h3>Habits</h3>
      <ul>{habitList}</ul>
    </div>
  );
};

export default HabitsItems;
