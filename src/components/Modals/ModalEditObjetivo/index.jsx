import "./style.css";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../../api";

const ModalEditObjetivo = ({ closeModal, objetivo, getObjetivo }) => {
  const [descricao, setDescricao] = useState(objetivo.descricao);
  const [valor, setValor] = useState(objetivo.valor);
  const [atingido, setAtingido] = useState(objetivo.atingido);

  const handleEditObjetivo = async () => {
    const editedObjetivo = {
      descricao,
      valor,
      atingido,
    };


    const response = await api.put(
      `/objetivo/atualizar-objetivo/${objetivo._id}`,
      editedObjetivo
    );

    if (response.status !== 200) {
      return toast.error("A atualização falhou");
    }

    closeModal();
    getObjetivo();
    toast.success("Objetivo atualizado com sucesso");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <h3>Editar objetivo</h3>
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
        <button onClick={handleEditObjetivo}>Editar</button>
      </div>
    </div>
  );
};

export default ModalEditObjetivo;