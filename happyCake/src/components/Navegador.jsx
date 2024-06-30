import React from 'react'
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navegador() {

  return (

    <Navbar
        className="fixed-top"
        bg="dark"
        variant="dark"
        expand="lg"
    >
        <Container fluid className="d-flex justify-content-start">
            <Navbar.Brand><h1>HAPPY CAKE</h1></Navbar.Brand>
                <Link
                    to="/home"
                    className="text-white ms-3 text-decoration-none"
                >
                Home
                </Link>
                <Link
                    to="/contacto"
                    className="text-white ms-3 text-decoration-none"
                >
                
                Contacto
                </Link>
        </Container>
    </Navbar>

  )
}

export default Navegador