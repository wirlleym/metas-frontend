import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import api from "./api";

const App = () => {
  // Declaração dos states
  const [objetivo, setObjetivo] = useState([]);

  // Declaração das funções
  const getObjetivo = async () => {
    const response = await api.get("/listar-todos");

    setObjetivo(response.data);
  };

  // Declaração dos ciclos de vida

  // Ciclo de vida de montagem (array vazio)
  useEffect(() => {
    getObjetivo();
  }, []);

  return (
    <>
      <Toaster position="bottom-center" />
      <Header getObjetivo={getObjetivo} />
      <Home objetivo={objetivo} getObjetivo={getObjetivo} />
      <Footer />
    </>
  );
};

export default App;