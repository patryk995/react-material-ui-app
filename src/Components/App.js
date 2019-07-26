import React, { Component } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Exercises />
        <Footer />
      </>
    );
  }
}

export default App;
