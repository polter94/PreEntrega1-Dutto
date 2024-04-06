import Hero from "./Hero";
import Texto from "./Texto";
import Boton from "./Boton";
import { useState } from "react";

function Main() {
  const [texto, setTexto] = useState(""); // dafuq is dis?
  const [contador, setContador] = useState(0);
  return (
    <>
      <h2>Main</h2>
      <Hero />

      <Boton contador={contador} setContador={setContador}/>

      <button onClick={() => setTexto("Bienvenidos a la tienda?")}>Mostrar mensaje</button>
      <Texto texto={texto}/>
    </>
  )
}

export default Main;