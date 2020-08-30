import React from "react";
/* import "./Person.css";  // вставляем стили через styled component */
/* import Radium from 'radium'; */
import styled from "styled-components";

const StyleDiv =     // именно создаем как переменную а не как функция , а так по сути это обычный реакт компонент
  styled.div`
    width: 60%;
    margin: 0 auto;
    border: 1px solid #eee;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
      width: 450px;
    }
  `;

const person = (props) => {
  /* const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  }; */
  
  return (
    /* <div className="Person" style={style}> */ //для стайлд мы оборочавием так как ниже
    <StyleDiv>
      <p onClick={props.personClick}>
        {" "}
        {/* получаем событие из пропсов так как в App пробросили его, по названию personClick */}
        I'm a {props.name} and am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.personChange} value={props.name} />
    </StyleDiv>
    /* </div> */
  );
};

/* export default Radium(person); */
export default person;
