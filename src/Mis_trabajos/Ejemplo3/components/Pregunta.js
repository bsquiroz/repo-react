import React, {useState} from 'react'
import Error from './Error';

const Pregunta = ( { guardarRestante, guardarPresupuesto, setPregunta } ) => {

  const [cantidad, guardarCantidad ] = useState(0);
  const [error, guardarError] = useState(false);

  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value,10))
  }

  const agregarPresupuesto = (e) => {
    e.preventDefault();

    if(cantidad < 1 || isNaN(cantidad)){
      guardarError(true);
      return;
    }

    guardarError(false);
    guardarRestante(cantidad);
    guardarPresupuesto(cantidad);
    setPregunta(false);
  }
  return (
    <div>
      <h2>Coloca tu presupuesto</h2>
      {error && 
        <Error 
          texto={"Errorrrrrr"}
        />  
      }
      <form
        onSubmit={agregarPresupuesto}
      >
        <input 
          type="number"
          className="u-full-width"
          placeholder="coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input 
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
          // onClick={}
        />
      </form>
    </div>
  )
}

export default Pregunta
