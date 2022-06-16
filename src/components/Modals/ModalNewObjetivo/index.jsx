import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../../api";

const ModalNewObjetivo = ({ closeModal, getObjetivo }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [atingido, setAtingido] = useState("");


  const handleCreateObjetivo = async () => {
    const newPalette = {
      descricao,
      valor,
      atingido,
    };

    // ----- REQUISIÇÃO COM AXIOS

    const response = await api.post("/objetivo/criar-objetivo", newObjetivo);

    if (response.status !== 201) {
      return toast.error("Falha na criação do objetivo");
    }

    setDescricao("");
    setValor("");
    setAtingido("");
    closeModal();
    getObjetivo();
    toast.success("Objetivo adicionado");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <h3>Adicionar Objetivo</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <input
          value={descricao}
          placeholder="Digite a descrição"
          onChange={(event) => setDescricao(event.target.value)}
          name="descricao"
        />
        <input
          value={valor}
          placeholder="Digite o valor"
          onChange={(event) => setValor(event.target.value)}
          name="valor"
          type="number"
        />
        <input
          value={atingido}
          placeholder="Meta Alcançada"
          onChange={(event) => setAtingido(event.target.value)}
          name="atingido"
        /> 
        <button onClick={handleCreateObjetivo}>Adicionar</button>
      </div>
    </div>
  );
};

export default ModalNewObjetivo;