import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { login } from '../../services/auth';

function SignIn() {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      toast.error('Preencha todos os campos necessários');
      setIsLoading(false);
    } else {
      try {
        const response = await api.post('/signin', {
          email,
          password
        });

        login(response.data.token);
        history.push('/');

      } catch(error) {
        const description = error.response.data.description;
        toast.error(description);
        setIsLoading(false);
      }
    }

  }

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
                <Form.Control
                  type="email" 
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); }}
                />
              </Form.Group>

              <Form.Group className="float-left">
                <Form.Check
                  type="checkbox"
                  checked={remember}
                  label="Lembre-se de mim"
                  onChange={() => { setRemember(!remember) }}
                />
              </Form.Group>

              <Button variant="primary" className="btn-block btn-lg" type="submit" disabled={isLoading} onClick={handleSubmit}>
                {isLoading
                  ? <Spinner className="button-spinner" as="span" size="sm" animation="border" role="status" aria-hidden="true"/>
                  : 'Entrar'
                }
              </Button>
            </Form>
          </Col>
          <Col md={5} className="form-message">
            <div>
              <h2>
                Seja bem vindo novamente!
              </h2>
              <p>Ainda não possui uma conta? Clique no botão abaixo para registrar-se gratuitamente!</p>
              <Link to="/registro">
                <Button variant="white" className="btn-md">Registrar-se</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default SignIn;
