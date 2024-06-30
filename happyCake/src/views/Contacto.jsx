import React from 'react'
import { Container, Form, Button} from "react-bootstrap";

function Contacto() {
  return (
    <>
    <Container fluid className="mt-5 text-center">
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu mail" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>¿Cual es tu consulta?</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
      <Button variant="dark">Enviar</Button>
    </Form>
    </Container>
    </>
  )
}

export default Contacto