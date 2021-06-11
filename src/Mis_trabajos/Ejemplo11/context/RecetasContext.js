import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";

export const RecetasContext = createContext();

const initialState = {
  nombre:"",
  categoria:""
}

const RecetasProvider = (props) => {
  const [recetas, guardarRecetas] = useState([]);
  const [consultar, setConsultar] = useState(false)
  const [busqueda, buscarRecetas] = useState(initialState)
  const {nombre, categoria} = busqueda;

  useEffect(() => {
    if(consultar){
      getRecetas();
    }
  }, [busqueda])

  const getRecetas = async() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
    const response = await axios.get(url);
    guardarRecetas(response.data.drinks);
  }

  return ( 
    <RecetasContext.Provider
      value={{
        buscarRecetas,
        setConsultar,
        recetas
      }}
    >
      {props.children}
    </RecetasContext.Provider>
   );
}
 
export default RecetasProvider;