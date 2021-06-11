import React, { useState, useEffect } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";
import "./css.css";

const Principal = () => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (!citasIniciales) {
        citasIniciales = [];
    }

    const [citas, guardarCitas] = useState(citasIniciales);

    useEffect(() => {
        if (citasIniciales) {
            localStorage.setItem("citas", JSON.stringify(citas));
        } else {
            localStorage.setItem("citas", []);
        }
    }, [citas, citasIniciales]);

    const crearCita = (cita) => {
        guardarCitas([...citas, cita]);
    };

    const eliminarCita = (id) => {
        const aux = citas.filter((cita) => cita.id !== id);
        guardarCitas(aux);
    };

    return (
        <div className="bodyEjemplo2">
            <h1>Administrador de pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario crearCita={crearCita} />
                    </div>
                    <div className="one-half column">
                        {citas.length > 0 ? (
                            <h2>Administra tus citas</h2>
                        ) : (
                            <h2>Agrega una cita</h2>
                        )}
                        {citas.map((cita) => (
                            <Cita
                                cita={cita}
                                key={cita.id}
                                eliminarCita={eliminarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Principal;
