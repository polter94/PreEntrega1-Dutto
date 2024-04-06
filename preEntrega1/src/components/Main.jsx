import Hero from "./Hero";
import Texto from "./Texto";
import { useState } from "react";

function Main() {
  const [texto, setTexto] = useState(""); // dafuq is dis?
  const [contador, setContador] = useState(0);
  return (
    <>
      <h2>Main</h2>
      <Hero />
      <button onClick={() => setContador(contador+1)}>+1</button>
      <button onClick={() => setContador(contador+5)}>+5</button>
      <button onClick={() => setContador(contador-1)}>-1</button>
      <button onClick={() => setContador(contador-5)}>-5</button>
      <p>{contador}</p>

      <button onClick={() => setTexto("Bienvenidos a la tienda?")}>Mostrar mensaje</button>
      <Texto texto={texto}/>
    </>
  )
}

export default Main;