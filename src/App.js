import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Navbar from "./pages/Navbar";
import HabitList from "./pages/HabitList";
import EditHabit from "./pages/EditHabit";
import CreateHabit from "./pages/CreateHabit";
import LoginButton from "./pages/LoginButton";
// import LoggedOutButton from "./pages/LoggedOutButton";
import Greeting from "./pages/Greeting";

class App extends Component {
  state = {
    isLoggedIn: false
  };

  handleLoginClick = (e) => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // let button;

    // if (isLoggedIn) {
    //   button = <LoggedOutButton onClick={this.handleLogoutClick} />;
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }

    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />

          <div>
            {isLoggedIn === false ? (
              <div>
                <div className="card text-center">
                  <div className="card-header">Featured</div>
                  <div className="card-body">
                    <h5 className="card-title">Welcome To Habit Tracker</h5>
                    <p className="card-text">
                      Create custom habits you would like to track.
                      <br />
                      Habit tracker will keep you on track.
                    </p>
                    <div>
                      <Greeting isLoggedIn={this.handleLoginClick} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <Route exact path="/" component={HabitList} />
                <Route
                  path="/edit/:id"
                  render={() => <EditHabit id={this.state.id} />}
                />
                <Route path="/create" component={CreateHabit} />
                <Route path="/login" component={LoginButton} />
              </div>
            )}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
