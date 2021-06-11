import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
    //state del provider
    const [idReceta, setIdReceta] = useState(null);
    const [infReseta, setReceta] = useState({});

    useEffect(() => {
        if (!idReceta) return;
        getReceta();
        //eslint-disable-next-line
    }, [idReceta]);

    const getReceta = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
        const response = await axios.get(url);
        setReceta(response.data.drinks[0]);
    };

    return (
        <ModalContext.Provider
            value={{
                setIdReceta,
                infReseta,
                setReceta,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
