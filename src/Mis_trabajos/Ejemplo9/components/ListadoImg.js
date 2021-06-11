import React from 'react'
import Img from './Img'

const ListadoImg = ({ queryApi }) => {
  if(!queryApi) return null;

  return (
    <div>
      <div className="col-12 p-5 row">
        {queryApi.map((imagen) => (
          <Img
            key={imagen.id}
            imagen={imagen}
          />
        ))}
      </div>
    </div>
  )
}

export default ListadoImg
