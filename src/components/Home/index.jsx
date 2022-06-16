import "./style.css";
import Card from "../Card";
import { useState } from "react";
import ReactLoading from "react-loading";

const Home = ({ objetivo, getObjetivo }) => {
  const [filterInput, setfilterInput] = useState("");

  return (
    <div className="home-container">
      <h2>Meus Objetivos</h2>
      <input
        value={filterInput}
        onChange={(event) => setfilterInput(event.target.value)}
        placeholder="Filtrar por nome"
      />
      {objetivo.length === 0 ? (
        <ReactLoading type="spin" color="lightblue" />
      ) : (
        <div>
          {filterInput !== ""
            ? objetivo
                .filter((element) =>
                  element.descricao
                    .toLowerCase()
                    .includes(filterInput.toLowerCase())
                )
                .map((element) => {
                  return (
                    <Card
                      getObjetivo={getObjetivo}
                      key={element._id}
                      objetivo={element}
                    />
                  );
                })
            : objetivo.map((element) => {
                return (
                  <Card
                    getObjetivo={getObjetivo}
                    key={element._id}
                    objetivo={element}
                  />
                );
              })}
        </div>
      )}
    </div>
  );
};

export default Home;