import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react'

//crear el contexto 
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y el state

const CategoriasProvider = (props) => {

  //crear el state del context 
  const [categories, setCategories] = useState([])

  //ejecutar el llamado a la api

  useEffect(() => {
    getCateries();
  }, [])

  const getCateries = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    const response = await axios.get(url);
    setCategories(response.data.drinks);
  }

  return (
    <CategoriasContext.Provider
      value={{
        categories
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  )
}

export default CategoriasProvider;