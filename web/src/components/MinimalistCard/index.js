import React from 'react';

import { Card, Row, Col } from 'react-bootstrap';

import StyledIcon from '../StyledIcon';

import './style.css';

function CardInfo(props) {
  return (
    <Card className="minimalist-card">
      <Card.Body>
        <Row>
          <Col md={3}>
            <StyledIcon icon={props.icon} color={props.color} />
          </Col>
          <Col md={6}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.text}
            </Card.Text>
          </Col>
          <Col md={3}>
            <span className="card-value">{props.value}</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardInfo;
