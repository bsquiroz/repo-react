import React from "react";
import "./css.css";

const Home = () => {
    return (
        <div className="home__container">
            <div className="home__content">
                <h1>Mis proyectos de react</h1>
                <p>
                    Coloco esto en mi portafolio ya que le tengo un cariño
                    inmenso, porque con ellos aprendi a esta maravillosa
                    librería de js que me ha ayudado demasiado en mis proyectos
                    personales
                </p>
                <p>
                    se puede evidenciar que se utilizan los hooks de reack, que
                    hacen que esta librería sea mucho más intuitiva y fácil de
                    aprender, se manejan los hooks de useState, useEffect,
                    useContext y useReducer, además de utilizar Apis para hacer
                    el contenido mas dinámico
                </p>
            </div>
        </div>
    );
};

export default Home;
