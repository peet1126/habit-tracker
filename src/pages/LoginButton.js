import React from "react";
import { Link } from "react-router-dom";

function LoginButton(props) {
  return (
    <div>
      <form>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value="email@example.com"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>
          <div className="mx-auto">
            <Link to="/">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={props.isLoggedIn}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginButton;
