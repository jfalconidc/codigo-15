import { useState } from "react";
import { Counter, Header, Footer } from "./components";


export default function App() {
  const [name, setName] = useState("Jorge");

  //puedo agregar mas funciones
const changeName = () => {
  const newName = prompt("Ingresa un nuevo nombre");
  setName(newName);
};

  return (
    <>
    <Header />
      <h1 className="bg-[#f01]">Mi primer componente {name}</h1>
      <button onClick={changeName}>Cambiar nombre</button>
      <hr />
      <Counter />
      <Footer />
    </>
  );
}
