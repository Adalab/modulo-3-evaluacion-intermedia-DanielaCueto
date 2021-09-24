import "../styles/App.scss";
import dataArray from "../data/dataArray.json";
import { useState } from "react";

function App() {
  //poner los listados en el estado de REACT
  const [clubs, setClubs] = useState(dataArray);
  const [textInput, setTextInput] = useState("");
  const [weekInput, setWeekInput] = useState(false);
  const [weekendInput, setWeekendInput] = useState(false);

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

  const handleTextChange = (ev) => {
    const inputValue = ev.currentTarget.value;
    setTextInput(inputValue);
  };
  const handleWeek = (ev) => {
    const inputValue = ev.currentTarget.checked;
    setWeekInput(inputValue);
  };
  const handleWeekend = (ev) => {
    const inputValue = ev.currentTarget.checked;
    setWeekendInput(inputValue);
  };

  const handleNewClub = (ev) => {
    //primero creo el objeto
    const newClub = {
      name: textInput,
      openOnWeekdays: weekInput,
      openOnWeekend: weekendInput,
    };

    //añado el objeto a la lista de clubs
    clubs.push(newClub);

    // digo a react que la lista de clubs cambio
    setClubs([...clubs]);
  };

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Mis clubs</h1>
      </header>
      <ul className="book__list">{htmlList}</ul>
      <form className="formulary">
        <label htmlFor="text">Nombe del club</label>
        <input onChange={handleTextChange} type="text" name="text" />
        <label htmlFor="checkbox">¿Abre entre semana?</label>
        <input onChange={handleWeek} type="checkbox" />
        <label htmlFor="checkbox">¿Abre los fines de semana?</label>
        <input onChange={handleWeekend} type="checkbox" />
        <button type="button" onClick={handleNewClub} className="button">
          Añadir un nuevo club
        </button>
      </form>
    </div>
  );
}

export default App;
