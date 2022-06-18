import "./style.css";
// import logo from "../../assets/icons/logo.svg";
// import newPaletteIcon from "../../assets/icons/paleta.svg";
import ModalNewObjetivo from "../Modals/ModalNewObjetivo";
// import { toast } from "react-hot-toast";
import { useState } from "react";

const Header = ({ getObjetivo }) => {
  const [showModalCreate, setShowModalCreate] = useState(false);

  const handleShowModalCreate = () => {
    setShowModalCreate(!showModalCreate);
  };

  return (
    <>
      <div className="header-container">
        <div className="headerTitle-container">
          <h2>Metas e Objetivos</h2>
        </div>
        <div className="headerOptions-container">
          {/* <img
            className="headerOptions-newPaletteIcon"
            alt="Icone de criar nova paleta"
            src={newPaletteIcon}
            onClick={handleShowModalCreate}
          /> */}
        </div>
      </div>
      {showModalCreate && (
        <ModalNewObjetivo
          closeModal={handleShowModalCreate}
          getObjetivo={getObjetivo}
        />
      )}
    </>
  );
};

export default Header;