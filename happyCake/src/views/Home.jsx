import React from 'react'
import Image from 'react-bootstrap/Image';


function Home() {
  return (
    <div>
        <h1 className='titulo'>Los mejores pasteles de la ciudad</h1>
        <h3>Bienvenidos</h3>
        <div>
            <Image src="/src/assets/pasteles.png" fluid /> 
        </div>
    </div>
  )
}

export default Home