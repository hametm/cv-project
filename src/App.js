import React, { Component } from "react";
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';

class App extends Component {
  constructor() {
    super();
    this.state = {
      generalInfo: {
        name: "",
        email: "",
        phone: "",
      },
      educationInfo: {
        school: "",
        major: "",
        startDate: "",
        endDate: "",
      },
      practicalInfo: {
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    }
  }

  render() {
    return (
      <div className="App">
        <form action="">
          <General />
          <Education educationInfo={this.state.educationInfo} />
          <Practical practicalInfo={this.state.practicalInfo} />
        </form>
      </div>
    );
  }
}

export default App;
