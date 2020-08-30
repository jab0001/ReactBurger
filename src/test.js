import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
/* import Radium, { StyleRoot } from "radium"; // необходимо обернуть стайлрутом основное компонент */
/* import styled from "styled-components"; */

/* const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};  
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
`; */

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

    // const person = Object.assign({}, this.state.persons[personIndex]); // можем так или через spread оператор

    person.name = event.target.value;

    const persons = [...this.state.persons]; // делаем копию стейта
    persons[personIndex] = person;

    this.setState({
      persons: persons, // пристваиваем персонс копию персонс
    });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // делаем копию объекта иначе меняем мутацией сразу оригинальный стейт т.к. объекты и массивы в js меняются по ссылке
    const persons = [...this.state.persons]; // spread оператором копируем ,недопускать мутации непосредственно на стейт я так понимаю тут проблема в том что мы функцией меняем стейт
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const showMans = this.state.showPersons;
    this.setState({ showPersons: !showMans }); // аналогично v-if во вью, в реакте
  };

  render() {
    /* const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    }; */

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // массив перебираем маппом аналогично форофф в вью
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

      /* style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "blue",
        color: "black",
      }; */

    }

    // let classes = ["red", "bold"].join(' '); // сразу два класса применятся (если навешивать два и более классов надо использовать метод join())

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      /* <StyleRoot> */
      <div className="App">
        <h1>HI. My first React App</h1>
        {/* <p className={this.state.showPersons ? "red" : "bold"}>This is working!</p> */}
        <p className={classes.join(" ")}>This is working!</p>
        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton> */}
        {persons}
      </div>
      /* </StyleRoot> */
    );
  }
}

/* export default Radium(App); */
export default App;