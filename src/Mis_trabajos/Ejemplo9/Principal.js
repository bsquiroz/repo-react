import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import ListadoImg from "./components/ListadoImg";
import "./css.css";

const Principal = () => {
    const [query, setQuery] = useState("");
    const [queryApi, setQueryApi] = useState("");
    const [pageCurrent, setPageCurrent] = useState(1);
    const [totalPage, settotalPage] = useState(1);

    useEffect(() => {
        consultaApi();
    }, [query, pageCurrent]);

    const consultaApi = async () => {
        if (query) {
            const picturesForPage = 30;
            const apiKey = "21008346-f1e7444f3642122cece8c9f5c";
            const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&per_page=${picturesForPage}&page=${pageCurrent}`;
            const response = await axios.get(url);
            setQueryApi(response.data.hits);

            //calcular el total de paginas
            const calculateTotalPage = Math.ceil(
                response.totalHits / picturesForPage
            );
            settotalPage(calculateTotalPage);

            //mover la pantalla hacia arriba
            const jumbotron = document.querySelector(".jumbotron");
            jumbotron.scrollIntoView({ behavior: "smooth" });
        }
    };

    //agregando la navegacion de lo botones
    const paginaAnterior = () => {
        const newPageCurrent = pageCurrent - 1;
        if (newPageCurrent === 0) return;
        setPageCurrent(newPageCurrent);
    };

    const paginaSiguiente = () => {
        const newPageCurrent = pageCurrent + 1;
        if (newPageCurrent > totalPage) return;
        setPageCurrent(newPageCurrent);
    };

    return (
        <div className="bodyEjemplo9">
            <div className="container">
                <div className="jumbotron">
                    <div className="lead text-center">
                        <p>buscador de imagenes</p>
                        <Formulario setQuery={setQuery} />
                    </div>
                </div>
                <div className="row justitify-content-center">
                    <ListadoImg queryApi={queryApi} />
                    {pageCurrent === 1 ? null : (
                        <button
                            type="button"
                            className="btn btn-info mr-1"
                            onClick={() => paginaAnterior()}
                        >
                            &laquo; Anterior
                        </button>
                    )}
                    {pageCurrent === totalPage ? null : (
                        <button
                            type="button"
                            className="btn btn-info mr-1"
                            onClick={() => paginaSiguiente()}
                        >
                            Siguiente &raquo;
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Principal;
