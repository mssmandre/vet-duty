import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CompanyHistory = () => {
    return (
        <div>
           <footer className="bg-light text-center text-lg-start">
      <Container>
        <Row>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Nome da Empresa</h5>
            <p>
              Aqui você pode adicionar informações sobre a sua empresa, como missão, visão, valores, etc.
            </p>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 4</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Contato</h5>
            <p>
              Endereço da empresa, número de telefone, e-mail, etc.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
        </div>
    );
}

export default CompanyHistory;
