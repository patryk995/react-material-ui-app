import React, { Component } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

export class App extends Component {
  state = { exercises, exercise: {} };
  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }

  handleCategorySelect = category => {
    this.setState({ category: category });
  };

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise } = this.state;
    return (
      <>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelect}
        />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelect}
        />
      </>
    );
  }
}

export default App;
