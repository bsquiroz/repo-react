import React from 'react'
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #000;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 1rem;
    text-align: center;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Cotizacion = ({ result }) => {
  if(Object.keys(result).length  === 0) return null;

  return (
    <ResultadoDiv>
      <Precio> el precio es: <span>{result.PRICE}</span></Precio> 
      <Info> precio mas alto del dia: <span>{result.HIGHDAY}</span></Info> 
      <Info> precio mas bajo del dia: <span>{result.LOWDAY}</span></Info> 
      <Info> Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></Info> 
      <Info> Última actualización: <span>{result.LASTUPDATE}</span></Info> 
    </ResultadoDiv>
  )
}

export default Cotizacion;
