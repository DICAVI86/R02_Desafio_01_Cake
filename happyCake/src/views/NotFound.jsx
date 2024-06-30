import React from 'react'
import Alert from 'react-bootstrap/Alert';


function NotFound() {
  return (
    <div>
        <>
        <Alert key='danger' variant='danger'>
          <strong>¡ERROR!</strong>
          <br/>
          ESTA PAGINA NO EXISTE
        </Alert>
    </>
    </div>
  )
}

export default NotFound