import React from 'react';

import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap';

import { FiPlus } from 'react-icons/fi';
import { FaDotCircle } from 'react-icons/fa';

import Navbar from '../../components/NavigationBar';
import PageTitle from '../../components/PageTitle';

function Departments() {
  return (
    <Container fluid className="pb-5">
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
                  <Button variant="primary" size="sm" className="float-right"><FiPlus /> Adicionar Departamento</Button>
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
    </Container>
  );
}

export default Departments;
