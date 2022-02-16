import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  return (
    <div>
      <NumberOfStudents />
    </div>
  );
};

class NumberOfStudents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enrolledStudents: 87,
      es: "",
      waitlistedStudents: 8,
      ws: "",
    };
  }

  waitlistedStudentsIncrement(event) {
    this.setState({
      waitlistedStudents:
        this.state.waitlistedStudents + parseInt(this.state.ws),
    });
  }

  waitlistedIncreaseByOne() {
    this.setState({
      waitlistedStudents: this.state.waitlistedStudents + 1,
    });
  }

  enrolledIncreaseByOne() {
    this.setState({
      enrolledStudents: this.state.enrolledStudents + 1,
    });
  }

  enrolledStudentsIncrement() {
    this.setState({
      enrolledStudents: this.state.enrolledStudents + parseInt(this.state.es),
    });
  }

  render() {
    return (
      <div>
        <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
        <button onClick={this.enrolledIncreaseByOne.bind(this)}>
          {" "}
          Add 1 Enrolled Student
        </button>

        <h2>Add Multiple Enrolled Students:</h2>
        <input
          type="number"
          onChange={(event) => this.setState({ es: event.target.value })}
          value={this.state.es}
        />
        <button onClick={this.enrolledStudentsIncrement.bind(this)}>
          Increase Students
        </button>

        <h1>Waitlisted Students: {this.state.waitlistedStudents}</h1>
        <button onClick={this.waitlistedIncreaseByOne.bind(this)}>
          {" "}
          Add 1 Enrolled Student
        </button>

        <h2>Add Multiple Waitlisted Students:</h2>
        <input
          type="number"
          onChange={(event) => this.setState({ ws: event.target.value })}
          value={this.state.ws}
        />
        <button onClick={this.waitlistedStudentsIncrement.bind(this)}>
          Increase Students
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));