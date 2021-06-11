import React from 'react'

const Song = ({lyrics}) => {

  if(!lyrics) return null;

  return (
    <>
      <h2>Letra canción</h2>
      <p className="letra">{lyrics}</p>
    </>
  )
}

export default Song
