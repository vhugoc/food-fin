import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function SignUp() {
  return (
    <Container fluid>
      <div className="form-container">
        <Row>
          <Col md={7} sm={12}>
            <Form>
              <div className="form-title">
                <h1>Novo usuário</h1>
                <span>Preencha todos os campos abaixo para registrar-se gratuitamente</span>
              </div>
              <Form.Group>
                <Form.Control type="text" placeholder="Nome da empresa" />
              </Form.Group>
              
              <Form.Group>
                <Form.Control type="text" placeholder="Telefone" />
              </Form.Group>

              <Form.Group>
                <Form.Control type="email" placeholder="E-mail" />
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col md={6}>
                    <Form.Control type="password" placeholder="Senha" />
                  </Col>
                  <Col md={6}>
                    <Form.Control type="password" placeholder="Confirme sua senha" />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Button variant="primary" className="btn-block btn-lg" type="submit">
                Registrar-se
              </Button>
            </Form>
          </Col>
          <Col md={5} className="form-message">
            <div>
              <h2>
                Registre-se agora mesmo!
              </h2>
              <p>Já possui uma conta? Clque no botão abaixo para fazer a autenticação</p>
              <Link to="/login">
                <Button variant="white" className="btn-md">Entrar em sua conta</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default SignUp;
