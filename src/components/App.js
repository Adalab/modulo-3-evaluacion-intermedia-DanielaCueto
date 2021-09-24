import "../styles/App.scss";
import dataArray from "../data/dataArray.json";
import { useState } from "react";

function App() {
  //poner los listados en el estado de REACT
  const [clubs, setClubs] = useState(dataArray);
  //console.log(dataArray);
  //Pintar el listado de clubs inicial.
  const htmlList = clubs.map((oneData, i) => (
    <li key={i} className="book__item item">
      <h3 className="item__title">
        #{i}: {oneData.name}
      </h3>
      <p className="item__text">
        Abierto entre semana:{oneData.openOnWeekdays ? "Sí" : "No"}
      </p>
      <p className="item__text">
        Abierto el fin de semana:{oneData.openOnWeekend ? "Sí" : "No"}
      </p>
    </li>
  ));
  const handleNewClub = (ev) => {
    const inputValue = ev.currentTarget.value;
    console.log(inputValue);
  };

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Mis clubs</h1>
      </header>
      <ul className="book__list">{htmlList}</ul>
      <form className="formulary">
        <label htmlFor="text">Nombe del club</label>
        <input type="text" name="text" />
        <label htmlFor="checkbox">¿Abre entre semana?</label>
        <input type="checkbox" />
        <label htmlFor="checkbox">¿Abre los fines de semana?</label>
        <input type="checkbox" />
        <button onClick={handleNewClub} className="button">
          Añadir un nuevo club
        </button>
      </form>
    </div>
  );
}

export default App;
