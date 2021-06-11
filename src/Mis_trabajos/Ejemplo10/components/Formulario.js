import React, {useState} from 'react'

const initialState = {
  artista:"",
  cancion:""
}

const Formulario = ({ setQueryLyrics }) => {

  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(false)

  const recuperarValores = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  const queryInf = (e) => {
    e.preventDefault()

    if(values.artista.trim() === "" || values.cancion.trim() === ""){
      setError(true);
      return;
    }
    setError(false);
    setQueryLyrics(values);
  }

  return (
    <div className="bg-info">
      {error && <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> }
      <div className="container">
        <div className="row">
          <form 
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={queryInf}
          >
            <fieldset>
              <legend className="text-center">
                Buscador letras de canciones
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre del artista"
                      onChange={recuperarValores}
                      value={values.artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre de la cancion"
                      onChange={recuperarValores}
                      value={values.cancion}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary float-right"
              >
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Formulario
