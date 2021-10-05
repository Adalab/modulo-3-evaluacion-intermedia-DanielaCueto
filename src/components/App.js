import "../styles/App.scss";
import dataArray from "../data/dataArray.json";
import { useState } from "react";

function App() {
  //poner los listados en el estado de REACT
  const [clubs, setClubs] = useState(dataArray);
  const [textInput, setTextInput] = useState("");
  const [weekInput, setWeekInput] = useState(false);
  const [weekendInput, setWeekendInput] = useState(false);
  const [filter, setFilter] = useState("All");

  //Filtrar el listado y luego con map PINTAR el listado de clubs

  const htmlList = () => {
    return clubs
      .filter((oneData) => {
        if (filter === "openOnWeekDays") {
          return oneData.openOnWeekdays === true;
        } else if (filter === "openOnWeekend") {
          return oneData.openOnWeekend === true;
        }
        return true;
      })
      .map((oneData, i) => {
        return (
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
        );
      });
  };

  const handleTextChange = (ev) => {
    ev.preventDefault();
    const inputValue = ev.currentTarget.value;
    setTextInput(inputValue);
  };
  const handleWeek = (ev) => {
    setWeekInput(ev.currentTarget.checked);
  };
  const handleWeekend = (ev) => {
    setWeekendInput(ev.currentTarget.checked);
  };

  const handleFilter = (ev) => {
    setFilter(ev.target.value);
  };

  const handleNewClub = (ev) => {
    //primero creo el objeto
    const newClub = {
      name: textInput,
      openOnWeekdays: weekInput,
      openOnWeekend: weekendInput,
    };
    //con la función de estado, cambio los valores
    setTextInput("");
    setWeekInput(false);
    setWeekendInput(false);

    //añado el objeto a la lista de clubs
    clubs.push(newClub);
    //console.log(newClub);

    // digo a react que la lista de clubs cambio
    setClubs([...clubs]);
  };

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Mis clubs</h1>
        <select value={filter} onChange={handleFilter}>
          <option value="All">Todos</option>
          <option value="openOnWeekDays">Abren entre semana</option>
          <option value="openOnWeekend">Abren los fines de semana</option>
        </select>
      </header>
      <ul className="book__list">{htmlList()}</ul>
      <form className="formulary">
        <label htmlFor="text">Nombe del club</label>
        <input
          onChange={handleTextChange}
          type="text"
          name="text"
          value={textInput}
        />
        <label htmlFor="checkbox">¿Abre entre semana?</label>
        <input
          onChange={handleWeek}
          type="checkbox"
          id="week"
          checked={weekInput}
        />
        <label htmlFor="checkbox">¿Abre los fines de semana?</label>
        <input
          onChange={handleWeekend}
          type="checkbox"
          id="weekend"
          checked={weekendInput}
        />
        <button type="button" onClick={handleNewClub} className="button">
          Añadir un nuevo club
        </button>
      </form>
    </div>
  );
}

export default App;
