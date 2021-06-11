import React, {useState} from 'react'
import Error from './Error';

const Formulario = ({ setQuery }) => {

  const [termino, setTermino] = useState('');
  const [error, setError] = useState(false);

  const buscarImagenes = (e) => {
    e.preventDefault();

    //validar
    if(termino.trim() === ""){
      setError(true);
      return;
    } 
    setError(false)

    //pasar la consulta hacia el componente principal
    setQuery(termino)
  }
  return (
    <form
      onSubmit={buscarImagenes}
    >
      <div className="row">
        <div className="form-group col-md-8">
          <input  
            type="text"
            className="form-control from-control-lg"
            placeholder="buscar una imagen, ejemplo: futbol o café"
            onChange={e => setTermino(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input  
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            placeholder="Buscar"
          />
        </div>

      </div>
      {error && 
      <Error
        mensaje={"Agrega un termino de busqueda"}
      />}
    </form>
  )
}

export default Formulario
