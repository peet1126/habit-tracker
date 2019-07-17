import React from "react";
import { Link } from "react-router-dom";

function Greeting(props) {
  return (
    <Link to="/login">
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={props.isLoggedIn}
        >
          Login
        </button>
      </div>
    </Link>
  );
}

export default Greeting;
