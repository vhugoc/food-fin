import React, { useState } from 'react';

import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { FiTrendingUp, FiUsers, FiShoppingCart } from 'react-icons/fi';

import Navbar from '../../components/NavigationBar';
import MinimalistCard from '../../components/MinimalistCard';
import Timeline from '../../components/Timeline';

function Dashboard() {

  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']
    },
    colors: ['#1ca2b8', '#857cf5'],
    stroke: {
      curve: 'smooth',
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return `R$${value}`;
        }
      },
    },

    legend: {
      position: 'top'
    },

    annotations: {
      yaxis: [
        {
          y: 400,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396'
            },
            text: 'Acima da média'
          }
        }
      ]
    },

    dataLabels: {
      enabled: false
    }
  });

  const [chartSeries, setChartSeries] = useState(
    [
      {
        name: "Mesa",
        data: [352.00, 423.00, 203, 320, 450, 500, 650]
      },
      {
        name: "Delivery",
        data: [200.00, 132.00, 110, 140, 156, 232, 195]
      }
    ]
  );

  return (
    <Container fluid className="pb-5">
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
      <Row className="pl-5 pr-5">
        <Col sm={12} md={8}>
          <Card>
            <Card.Body>
              <Row>
                <Col sm={6}>
                  <h5>Receita em Vendas</h5>
                </Col>
                <Col sm={6}>
                  <ButtonGroup className="float-right mb-2" size="sm">
                    <Button variant="primary">Semana</Button>
                    <Button variant="secondary">Mês</Button>
                    <Button variant="secondary">3 Meses</Button>
                  </ButtonGroup>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col sm={12}>
                  <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="area"
                    height="300"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Body>
              <Timeline />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
