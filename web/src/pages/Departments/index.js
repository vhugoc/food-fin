import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Card, Form, Button, Table, Modal, ButtonGroup } from 'react-bootstrap';

import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';
import './style.css';

import Navbar from '../../components/NavigationBar';
import PageTitle from '../../components/PageTitle';

import ArrayHelper from '../../services/helpers/array.js';

function Departments() {

  const [selectedId, setSelectedId] = useState();
  const [name, setName] = useState();
  const [access, setAccess] = useState();
  const [isActive, setIsActive] = useState(true);

  const [departmentList, setDepartmentList] = useState([{
    id: 1,
    name: "Caixa",
    access: 1,
    is_active: true
  },
  {
    id: 2,
    name: "Motoboy",
    access: 2,
    is_active: false
  },
  {
    id: 3,
    name: "Garçom",
    access: 3,
    is_active: true
  }]);
  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");

  const [showDepartmentModal, setShowDepartmentModal] = useState(false);

  useEffect(() => {
    handleFilter(filterTerm);
  }, [filterTerm, departmentList]);

  const handleClose = () => setShowDepartmentModal(false);
  const handleShow = () => setShowDepartmentModal(true);

  const clearFields = () => {
    setSelectedId(null);
    setName('');
    setAccess('-1');
    setIsActive(true);
  }
  
  const handleFilter = (departmentName) => {
    const filtereds = departmentList.filter((department) => {
      return department.name.toLowerCase().includes(departmentName.toLowerCase());
    });
    setFilteredDepartments(filtereds);
  }

  const handleOpenModal = () => {
    clearFields();
    handleShow();
  }

  const handleSelect = (id) => {
    const selectedDepartment = ArrayHelper.getElementById(id, departmentList);
    setSelectedId(selectedDepartment.id);
    setName(selectedDepartment.name);
    setAccess(selectedDepartment.access);
    setIsActive(selectedDepartment.is_active);
    handleShow();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedId) {
      const temporaryId = (Math.random() * 1000).toFixed();
      setDepartmentList(departmentList => [...departmentList, {
        id: temporaryId,
        name: name,
        access: access,
        is_active: isActive
      }]);
      toast.success("Departamento criado com sucesso!");
      handleClose();
    }
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
                  <Form.Control className="search" type="text" placeholder="Pesquisar..." onChange={(e) => {setFilterTerm(e.target.value)}}></Form.Control>
                </Col>
                <Col sm={8}>
                  <Button variant="primary" size="sm" className="float-right" onClick={handleOpenModal}><FiPlus /> Adicionar Departamento</Button>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Nome do departamento</th>
                        <th>Nível de Acesso</th>
                      </tr>
                    </thead>
                    <tbody>
                      { filteredDepartments.map(department => (
                        <tr key={department.id} onClick={() => handleSelect(department.id)}>
                          <td>
                            {department.name}
                            <span className={`data-status text-${department.is_active ? 'success' : 'danger'} d-block`}>Departamento {department.is_active ? 'Ativo' : 'Inativo'}</span>
                          </td>
                          <td>
                            <span className="badge badge-primary">Nível {department.access}</span>
                          </td>
                        </tr>
                      ))}
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
            <p>Gerencie os departamentos para anexá-los aos colaboradores</p>
          </div>

          <div className="body">
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Nome do departamento"
                    value={name}
                    onChange={(e) => { setName(e.target.value); }}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Nível de acesso</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Escolha o nível"
                    value={access}
                    onChange={(e) => {
                      setAccess(e.target.value);
                    }}
                  >
                    <option value="-1">Escolha o nível</option>
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
