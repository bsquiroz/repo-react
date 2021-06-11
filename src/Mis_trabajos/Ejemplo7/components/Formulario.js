import React, {useEffect, useState} from 'react'
import styled from "@emotion/styled"
import useMoneda from '../hooks/useMoneda';
import useCrito from "../hooks/useCrito";
import axios from 'axios';
import Error from './Error';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width:100%;
  border-radius: 10px;
  color: #FFF;
  transition: background-color .3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const MONEDAS = [
  {codigo: "USD", nombre: "Dolar de estados unidos"},
  {codigo: "MXN", nombre: "Peso Mexicano"},
  {codigo: "EUR", nombre: "Euro"},
  {codigo: "GBP", nombre: "Libra Esterlina"},
]


const Formulario = ({ setCripto, setMoneda }) => {
  const [listaCripto, guardarCritomonedas] = useState([]);
  const [error, setError] = useState(false);

  const [state, Selecionar ] = useMoneda("elije tu moneda","", MONEDAS);
  const [criptomoneda, SelectCripto] = useCrito("elije tu criptomoneda", "", listaCripto);

  useEffect(() => {
    queryApi();
  }, [])

  const queryApi = async () => {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
    const resultado = await axios.get(url);
    guardarCritomonedas(resultado.data.Data);
  }

  const cotizarMoneda = (e) => {
    e.preventDefault();
    if(state.trim() === "" || criptomoneda.trim() === ""){
      setError(true);
      console.log("eorrrrr")
      return;
    }
    setError(false);

    setCripto(criptomoneda);
    setMoneda(state);
  }


  return (
    <form
      onSubmit={cotizarMoneda}
    >
      {error && 
        <Error
          mensaje={"Los dos campos son obligatorios"}
        />
      }
      <Selecionar />
      <SelectCripto />
      <Boton
        type="submit"
        value="Calcular"
      ></Boton>
    </form>
  )
}

export default Formulario
