import React, { Component } from "react";
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';
import "./styles/style.css";

class App extends Component {
  constructor() {
    super();
  }

  // This one doesn't seem to work, wherever it's placed
  toggleHiddenElements = () => {
    const elements = document.querySelectorAll("p");
    [...elements].forEach(p => {
        if (p.textContent === "") {
            p.classList.add("hidden");
        }
        if (p.textContent !== "") {
            p.classList.remove("hidden");
        }
    });
}

  render() {
    return (
      <div className="App">
        <header>
          <h1>Your CV!</h1>
        </header>
        <form action="">
          <General />
          <Education />
          <Practical />
        </form>
        {this.toggleHiddenElements()}
      </div>
    );
  }
}

export default App;
