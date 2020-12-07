import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { FiTrendingUp, FiUsers, FiShoppingCart } from 'react-icons/fi';

import Navbar from '../../components/NavigationBar';
import MinimalistCard from '../../components/MinimalistCard';

function Dashboard() {
  return (
    <Container fluid>
      <Navbar />
      <Row className="p-5">
        <Col sm={12} md={4}>
          <MinimalistCard icon={FiTrendingUp} color="primary" title="Receita" text="Total em receita na última semana" value="1.500,00" />
        </Col>
        <Col sm={12} md={4}>
          <MinimalistCard icon={FiShoppingCart} color="info" title="Vendas" text="Transações na última semana" value="96" />
        </Col>
        <Col sm={12} md={4}>
          <MinimalistCard icon={FiUsers} color="success" title="Novos Clientes" text="Novos clientes na última semana" value="14" />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
