import "./style.css";
import { toast } from "react-hot-toast";
import api from "../../../api";
// import { useEffect } from "react";

const ModalRemoveObjetivo = ({ closeModal, objetivo, getObjetivo }) => {
  const handleRemoveObjetivo = async () => {

    // REQUISIÇÃO COM AXIOS

    const response = await api.delete(`/objetivo/excluir-objetivo/${objetivo._id}`);

    if (response.status !== 200) {
      return toast.error("Erro na exclusão do objetivo");
    }

    closeModal();
    getObjetivo();
    toast.success("Objetivo excluido com sucesso");
  };

  return (
    <div className="modal-overlay">
      <div className="modalRemove-container">
        <h3>Deseja excluir o objetivo {objetivo.sabor}?</h3>
        <div className="modalRemove-actions">
          <button className="cancelButton" onClick={closeModal}>
            Não
          </button>
          <button className="successButton" onClick={handleRemoveObjetivo}>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRemoveObjetivo;