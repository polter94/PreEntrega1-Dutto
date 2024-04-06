import React from 'react'

function Boton({contador,setContador}) {
  return (
    <>
    <button onClick={() => setContador(contador-1)}>-1</button>
    <button onClick={() => setContador(contador-5)}>-5</button>
    <button onClick={() => setContador(contador=0)}>0</button>
    <button onClick={() => setContador(contador+1)}>+1</button>
    <button onClick={() => setContador(contador+5)}>+5</button>

    <p>{contador}</p>
    </>
  )
}

export default Boton