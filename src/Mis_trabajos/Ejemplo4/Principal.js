import React, { useState } from "react";
import "./css.css";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
    background-color: #fff;
    padding: 3rem;
`;

const initialState = {
    cotizacion: 0,
    datos: {
        marca: "",
        year: "",
        plan: "",
    },
};

const Principal = () => {
    const [resumen, setResumen] = useState(initialState);
    const [cargando, setCargando] = useState(false);

    const { datos, cotizacion } = resumen;

    return (
        <div className="bodyEjemplo4">
            <Contenedor className="bodyEjemplo">
                <Header titulo={"Cotizador"} />
                <ContenedorFormulario>
                    <Formulario
                        setResumen={setResumen}
                        setCargando={setCargando}
                    />
                    {cargando && <Spinner />}

                    <Resumen datos={datos} />

                    {!cargando && <Resultado cotizacion={cotizacion} />}
                </ContenedorFormulario>
            </Contenedor>
        </div>
    );
};

export default Principal;
