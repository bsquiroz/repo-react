import React, {useState} from 'react'

const initialState = {
  mascota: "",
  propietario: "",
  fecha: "",
  hora: "",
  sintomas: ""
}

const Formulario = ({crearCita}) => {

  const [cita, actualizarCita] = useState(initialState)
  const [error, actualizarError] = useState(false);

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  const {mascota, propietario, fecha, hora, sintomas} = cita;

  const submitCita = (e) => {
    e.preventDefault();

    if(mascota.trim() === "" || propietario.trim() === "" ||
    fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === ""){
      actualizarError(true);
      return;
    }
    actualizarError(false);

    crearCita({
      ...cita,
      id: Date.now()
    })

    actualizarCita(initialState)
  }

  return (
    <>
      <h2>Crear cita</h2>
      {error && 
        <p className="alerta-error">Todos los campos son obligatorios</p>
      }
      <form
        onSubmit={submitCita}
      >
        <label>Nombre mascota</label>
        <input 
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre dueño</label> 
        <input 
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input 
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input 
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea 
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar cita</button>
      </form>
    </>
  )
}



export default Formulario
