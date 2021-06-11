import React, {useState} from 'react'
import Error from './Error';

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {

  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState("");
  const [error, guardarError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ""){
      guardarError(true);
      return;
    }
    guardarError(false);

    const gasto = {
      nombre,
      cantidad,
      id: Date.now()
    }

    guardarGasto(gasto)
    guardarCrearGasto(true);
    
    guardarNombre("");
    guardarCantidad("");
    

  }

  return (
    <form
      onSubmit={agregarGasto}
    >
      {error && 
        <Error
          texto={"Ambos campos son obligatorios o presupuesto incorrecto"}
        />
      }
      <h2>Agregar tus gastos aqui</h2>
      <div className="campo">
        <label>Nombre gasto</label>
        <input 
          type="text" 
          className="u-full-width" 
          placeholder="Ej Transporte"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad gasto</label>
        <input 
          type="number" 
          className="u-full-width" 
          placeholder="Ej 300"
          value={cantidad}
          onChange={e => guardarCantidad( parseInt(e.target.value))}
        />
      </div>
      <input 
        type="submit" 
        className="button-primary u-full-width" 
        value="Agregar gasto"
      />
    </form>
  )
}

export default Formulario
