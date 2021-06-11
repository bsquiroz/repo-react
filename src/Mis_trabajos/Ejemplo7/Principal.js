import React, { useState, useEffect } from "react";
import "./css.css";
import axios from "axios";
import styled from "@emotion/styled";
import imagen from "./img/cryptomonedas.png";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

const Heading = styled.h1`
    font-family: "Bebas Neue", cursive;
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 80px;

    &::after {
        content: "";
        width: 100%;
        height: 6px;
        background-color: #66a2fe;
        display: block;
    }
`;

const Imagen = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;

const Principal = () => {
    const [moneda, setMoneda] = useState("");
    const [cripto, setCripto] = useState("");
    const [result, setResult] = useState({});
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        cotizar();
    }, [moneda, cripto]);

    const cotizar = async () => {
        if (moneda === "" || cripto === "") return;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
        const response = await axios.get(url);

        setSpinner(true);

        setTimeout(() => {
            setSpinner(false);
            setResult(response.data.DISPLAY[cripto][moneda]);
        }, 3000);
    };

    return (
        <div className="bodyEjemplo7">
            <Contenedor>
                <div>
                    <Imagen src={imagen} alt="imagen cripto" />
                </div>
                <div>
                    <Heading>Cotiza criotomonedas al instante</Heading>
                    <Formulario setMoneda={setMoneda} setCripto={setCripto} />
                    {spinner ? <Spinner /> : <Cotizacion result={result} />}
                </div>
            </Contenedor>
        </div>
    );
};

export default Principal;
