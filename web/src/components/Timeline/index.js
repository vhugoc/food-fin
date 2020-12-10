import React from 'react';

import { FiCreditCard, FiInbox } from 'react-icons/fi';

import './style.css';

function Timeline() {
  return (
    <div class="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
      <div class="vertical-timeline-item vertical-timeline-element">
        <div>
          <span class="vertical-timeline-element-icon bounce-in"> <i class="badge badge-dot badge-dot-xl badge-success"> </i> </span>
          <div class="vertical-timeline-element-content bounce-in">
            <h4 class="timeline-title">Mesa Fechada</h4>
            <p><FiCreditCard className="mr-2" />Cartão de Crédito</p>
            <span className="badge badge-success">R$ 23,55</span>
            <span class="vertical-timeline-element-date">14:23</span>
          </div>
        </div>
      </div>
      <div class="vertical-timeline-item vertical-timeline-element">
        <div>
          <span class="vertical-timeline-element-icon bounce-in"> <i class="badge badge-dot badge-dot-xl badge-info"> </i> </span>
          <div class="vertical-timeline-element-content bounce-in">
            <h4 class="timeline-title">Pedido de Delivery</h4>
            <p><FiInbox className="mr-2" />Dinheiro</p>
            <span className="badge badge-success">R$ 64,32</span>
            <span class="vertical-timeline-element-date">14:05</span>
          </div>
        </div>
      </div>
      <div class="vertical-timeline-item vertical-timeline-element">
        <div>
          <span class="vertical-timeline-element-icon bounce-in"> <i class="badge badge-dot badge-dot-xl badge-info"> </i> </span>
          <div class="vertical-timeline-element-content bounce-in">
            <h4 class="timeline-title">Pedido de Delivery</h4>
            <p><FiCreditCard className="mr-2" />Cartão de Débito</p>
            <span className="badge badge-success">R$ 35,92</span>
            <span class="vertical-timeline-element-date">13:33</span>
          </div>
        </div>
      </div>
      <div class="vertical-timeline-item vertical-timeline-element">
        <div>
          <span class="vertical-timeline-element-icon bounce-in"> <i class="badge badge-dot badge-dot-xl badge-success"> </i> </span>
          <div class="vertical-timeline-element-content bounce-in">
            <h4 class="timeline-title">Mesa Fechada</h4>
            <p><FiCreditCard className="mr-2" />Cartão de Crédito</p>
            <span className="badge badge-success">R$ 52,30</span>
            <span class="vertical-timeline-element-date">13:20</span>
          </div>
        </div>
      </div>
      <div class="vertical-timeline-item vertical-timeline-element">
        <div>
          <span class="vertical-timeline-element-icon bounce-in"> <i class="badge badge-dot badge-dot-xl badge-info"> </i> </span>
          <div class="vertical-timeline-element-content bounce-in">
            <h4 class="timeline-title">Pedido de Delivery</h4>
            <p><FiCreditCard className="mr-2" />Cartão de Débito</p>
            <span className="badge badge-success">R$ 35,92</span>
            <span class="vertical-timeline-element-date">13:03</span>
          </div>
        </div>
      </div>
      <div class="vertical-timeline-item vertical-timeline-element">
        <div>
          <span class="vertical-timeline-element-icon bounce-in"> <i class="badge badge-dot badge-dot-xl badge-success"> </i> </span>
          <div class="vertical-timeline-element-content bounce-in">
            <h4 class="timeline-title">Mesa Fechada</h4>
            <p><FiCreditCard className="mr-2" />Cartão de Crédito</p>
            <span className="badge badge-success">R$ 52,30</span>
            <span class="vertical-timeline-element-date">13:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
