import React from "react";
import "./bootstrap.min.css";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaRecetas from "./components/ListaRecetas";
import CategoriasProvider from "./context/CategoriasContext";
import ModalProvider from "./context/ModalContext";
import RecetasProvider from "./context/RecetasContext";
import "./css.css";

const Principal = () => {
    return (
        <div className="bodyEjemplo11">
            <CategoriasProvider>
                <RecetasProvider>
                    <ModalProvider>
                        <Header />
                        <div className="container mt-5">
                            <div className="row">
                                <Formulario />
                            </div>
                            <div>
                                <ListaRecetas />
                            </div>
                        </div>
                    </ModalProvider>
                </RecetasProvider>
            </CategoriasProvider>
        </div>
    );
};

export default Principal;
