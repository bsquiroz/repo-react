import React, { useState, useEffect } from "react";
import "./css.css";
import styled from "@emotion/styled";
import Quote from "./components/Quote";

const Contenedor = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

const Boton = styled.button`
    background: -webkit-linear-gradient(
        top left,
        #007d35 0%,
        #007d35 40%,
        #0f574e 100%
    );
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
    transition: background-size 0.8s ease;
    :hover {
        cursor: pointer;
        background-size: 400px;
    }
    line-height: 10px;
`;

const Principal = () => {
    const [quote, setQuote] = useState({});

    useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi = async () => {
        const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";
        const api = await fetch(url);
        const frase = await api.json();
        setQuote(frase[0]);
    };

    return (
        <div className="bodyEjemplo5">
            <Contenedor>
                <Quote quotes={quote} />
                <Boton onClick={() => consultarApi()}>obtener clase</Boton>
            </Contenedor>
        </div>
    );
};

export default Principal;
