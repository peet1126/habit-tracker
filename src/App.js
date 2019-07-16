import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import HabitList from "./pages/HabitList";
import EditHabit from "./pages/EditHabit";
import CreateHabit from "./pages/CreateHabit";
// import CreateHabits from "./CreateHabits/CreateHabits";
// import HabitsItems from "./HabitsItems/HabitsItems";
// import habitsService from "./utils/habitsService";

class App extends Component {
  //   state = {
  //     completed: false,
  //     habits: [],
  //     text: ""
  //   };

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route exact path="/" component={HabitList} />
          <Route path="/edit/:id" component={EditHabit} />
          <Route path="/create" component={CreateHabit} />
          {/* <CreateHabits
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              inputTextName="text"
              textValue={this.state.text} */}
          {/* />
            <HabitsItems
              habits={this.state.habits}
              deleteHabit={this.deleteHabit}
              value={this.state.habits} */}
          {/* /> */}
        </div>
      </Router>
    );
  }
}

export default App;
//   handleChange = event => {
//     console.log(event.currentTarget.name);
//     this.setState({
//       [event.currentTarget.name]: event.currentTarget.value
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     console.log("fire");
//     const options = {
//       method: "POST",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify(this.state)
//     };
//     async function habitFetch(options) {
//       try {
//         const sendPost = await fetch("/api/habits/create", options);
//         const postResults = await sendPost.json();
//         return await postResults;
//       } catch (err) {
//         console.log(err);
//       }
//     }

//     habitFetch(options).then(habitData => {
//       console.log(habitData);
//       this.setState({
//         habits: [this.state.text, ...this.state.habits],
//         text: ""
//       });
//     });
//   };

//   deleteHabit = id => {
//     console.log(this.state.habits[id]);
//     const newHabits = this.state.habits.filter(habit => {
//       return this.state.habits[id] !== habit;
//     });
//     this.setState({ habits: newHabits });
//   };
