import React, { useState, useEffect } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";
import "./css.css";

const Principal = () => {
    const [presupuesto, guardarPresupuesto] = useState(0);
    const [restante, guardarRestante] = useState(0);
    const [pregunta, setPregunta] = useState(true);
    const [gastos, guardarGastos] = useState([]);
    const [gasto, guardarGasto] = useState({});
    const [crearGasto, guardarCrearGasto] = useState(false);

    useEffect(() => {
        if (crearGasto) {
            guardarGastos([...gastos, gasto]);

            const presupuestoRestante = restante - gasto.cantidad;
            guardarRestante(presupuestoRestante);

            guardarCrearGasto(false);
        }
    }, [gasto, crearGasto, restante]);

    return (
        <div className="bodyEjemplo3">
            <div className="container">
                <header>
                    <h1>Presupuesto</h1>
                    <div className="contenido-principal contenido">
                        {pregunta ? (
                            <Pregunta
                                guardarPresupuesto={guardarPresupuesto}
                                guardarRestante={guardarRestante}
                                setPregunta={setPregunta}
                            />
                        ) : (
                            <div className="row">
                                <div className="one-half column">
                                    <Formulario
                                        guardarGasto={guardarGasto}
                                        guardarCrearGasto={guardarCrearGasto}
                                    />
                                </div>
                                <div className="one-half column">
                                    <Listado gastos={gastos} />
                                    <ControlPresupuesto
                                        presupuesto={presupuesto}
                                        restante={restante}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Principal;
