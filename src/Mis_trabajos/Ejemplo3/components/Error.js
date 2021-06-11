import React from 'react'

const Error = ({texto}) => {
  return (
    <div className="alert alert-danger error">
      {texto}
    </div>
  )
}

export default Error
