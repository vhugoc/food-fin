import React, { useState } from 'react';

import { Container, Row, Col, Card, Form, Button, Table, Modal, ButtonGroup } from 'react-bootstrap';

import { FiPlus } from 'react-icons/fi';

import './style.css';

import Navbar from '../../components/NavigationBar';
import PageTitle from '../../components/PageTitle';

function Departments() {

  const [name, setName] = useState();
  const [access, setAccess] = useState();
  const [isActive, setIsActive] = useState(true);

  const [showDepartmentModal, setShowDepartmentModal] = useState(false);

  const handleClose = () => setShowDepartmentModal(false);
  const handleShow = () => setShowDepartmentModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name} - Nível: ${access} - Ativo: ${isActive}`);
  }

  return (
    <Container fluid className="departments-container pb-5">
      <Navbar />
      <Row className="pl-5 pr-5">
        <Col sm={12}>
          <PageTitle title="Departamentos" subtitle="Visualize e gerencie os departamentos de todos os colaboradores" />
        </Col>
      </Row>
      <Row className="pl-5 pr-5 pt-2">
        <Col sm={12}>
          <div className="datatable-container">
            <Card className="pb-3">
              <Row className="p-2">
                <Col sm={4}>
                  <Form.Control className="search" type="text" placeholder="Pesquisar..."></Form.Control>
                </Col>
                <Col sm={8}>
                  <Button variant="primary" size="sm" className="float-right" onClick={handleShow}><FiPlus /> Adicionar Departamento</Button>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Nome do departamento</th>
                        <th>Nível de Acesso</th>
                        <th>Descrição</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Caixa
                          <span className="data-status text-success d-block">Departamento Ativo</span>
                        </td>
                        <td><span class="badge badge-primary">Nível 1</span></td>
                        <td>Departamento para os caixas</td>
                      </tr>
                      <tr>
                        <td>
                          Motoboy
                          <span className="data-status text-danger d-block">Departamento Inativo</span>
                        </td>
                        <td><span class="badge badge-secondary">Nível 2</span></td>
                        <td>Departamento para os motoboys</td>
                      </tr>
                      <tr>
                        <td>
                          Garçom
                          <span className="data-status text-success d-block">Departamento Ativo</span>
                        </td>
                        <td><span class="badge badge-info">Nível 3</span></td>
                        <td>Departamento para os garçons</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
      </Row>
      <Modal size="lg" show={showDepartmentModal} onHide={handleClose}>
        <div className="modal-container">
          <div className="heading">
            <h2>Departamentos</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div className="body">
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" placeholder="Nome do departamento" onChange={(e) => { setName(e.target.value); }} />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Nível de acesso</Form.Label>
                  <Form.Control as="select" defaultValue="Choose..." onChange={(e) => {
                    setAccess(e.target.value);
                  }}>
                    <option value="-1">Escolha o nível...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <ButtonGroup>
                <Button
                  variant={`${isActive ? "info" : "secondary"}`}
                  size="sm"
                  onClick={() => { setIsActive(true); }}>
                    Departamento Ativo
                  </Button>
                <Button
                  variant={`${!isActive ? "info" : "secondary"}`}
                  size="sm"
                  onClick={() => { setIsActive(false); }}>
                    Departamento Inativo
                  </Button>
              </ButtonGroup>

            </Form>
          </div>
          <div className="footer">
            <Button variant="secondary" size="sm" onClick={handleClose}>Cancelar</Button>
            <Button variant="primary" size="sm" onClick={handleSubmit}>Confirmar</Button>
          </div>
        </div>
      </Modal>
    </Container>
  );
}

export default Departments;
