import { render } from "react-dom";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainClass from "./components/mainClass";
import MainFunctional from "./components/mainFunctional";
import Header from "./components/Header";
import "../src/components/style.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MainClass /> */}
        <Header className="sticky" />
        <div className="content">
          <MainFunctional />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
//render(<App />, document.getElementById("root"));
