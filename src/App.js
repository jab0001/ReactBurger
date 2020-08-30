import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 35 },
      { id: 2, name: "Joe", age: 45 },
      { id: 3, name: "Dug", age: 55 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 15 },
        { name: "Joe", age: 45 },
        { name: "Dug", age: 55 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const showMans = this.state.showPersons;
    this.setState({ showPersons: !showMans });
  };

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                personClick={() => this.deletePersonHandler(index)}
                personChange={(event) =>
                  this.nameChangedHandler(event, person.id)
                }
              />
            );
          })}
        </div>
      );
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>HI. My first React App</h1>
        <p className={classes.join(" ")}>This is working!</p>
        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

/* 
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Max", age: 35 },
      { name: "Joe", age: 45 },
      { name: "Dug", age: 55 },
    ],
    otherState: "some other value",
  });

  console.log(personsState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 35 },
        { name: "Joe", age: 45 },
        { name: "Dug", age: 55 },
      ],
      otherState: personsState.otherState
    });
  };
  return (
    <div className="App">
      <h1>HI. my 123 first React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
        Hi!. my hobby is flying
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
 */