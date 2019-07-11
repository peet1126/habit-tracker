import React from "react";

const TodoItems = ({ todo, deleteTodo }) => {
  const todoList = todo.length ? (
    todo.map((todo, id) => {
      return (
        <li className="todo-item" key={id}>
          <span
            onClick={() => {
              deleteTodo(id);
            }}
          >
            {todo}
          </span>
        </li>
      );
    })
  ) : (
    <p>You are all done</p>
  );
  return (
    <div>
      <h3>ToDo's</h3>
      <ul>{todoList}</ul>
    </div>
  );
};

export default TodoItems;
