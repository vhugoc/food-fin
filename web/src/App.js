import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <div className="form-container">
        <Row>
          <Col md={7} sm={12}>
            <Form>
              <div className="form-title">
                <h1>Entrar em sua conta</h1>
                <span>Preencha os campos abaixo para fazer a autenticação <span className="d-md-none d-sm-block">ou crie uma conta gratuita agora mesmo</span></span>
              </div>
              <Form.Group>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
              </Form.Group>

              <Form.Group>
                <Form.Control type="password" placeholder="Digite sua senha" />
              </Form.Group>
              <Button variant="primary" className="btn-block btn-lg" type="submit">
                Entrar
              </Button>
            </Form>
          </Col>
          <Col md={5} className="form-message">
            <div>
              <h2>
                Seja bem vindo novamente!
              </h2>
              <p>Ainda não possui uma conta? Clique no botão abaixo para registrar-se gratuitamente!</p>
              <Button variant="white" className="btn-md">Registrar-se</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
