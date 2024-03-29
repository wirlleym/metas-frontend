import "./style.css";
// import { toast } from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ModalRemoveObjetivo from "../Modals/ModalRemoveObjetivo";
import ModalEditObjetivo from "../Modals/ModalEditObjetivo";
import { useState } from "react";

const Card = ({ objetivo, getObjetivo }) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowRemoveModal = () => {
    setShowRemoveModal(!showRemoveModal);
  };

  const handleShowEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <p>{objetivo.descricao} </p>
        </div>
        <h3>{`R$${objetivo.valor.toFixed(2)}`}</h3>
        <p>{objetivo.atingido}</p>
        <div className="card-body">
          <span title="Editar">
            <FaEdit onClick={handleShowEditModal} />
          </span>
          <span title="Remover">
            <FaTrashAlt onClick={handleShowRemoveModal} />
          </span>
        </div>
      </div>
      {showRemoveModal && (
        <ModalRemoveObjetivo
          closeModal={handleShowRemoveModal}
          objetivo={objetivo}
          getObjetivo={getObjetivo}
        />
      )}
      {showEditModal && (
        <ModalEditObjetivo
          closeModal={handleShowEditModal}
          objetivo={objetivo}
          getObjetivo={getObjetivo}
        />
      )}
    </>
  );
};

export default Card;