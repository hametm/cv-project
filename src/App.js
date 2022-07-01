import React, { Component } from "react";
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <form action="">
          <General />
          <Education />
          <Practical />
        </form>
      </div>
    );
  }
}

export default App;
