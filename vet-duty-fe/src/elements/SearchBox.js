import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import statesAndCities from '../utils/data/brazilcities.json';
import speciality from '../utils/data/speciality.json';

function SearchBox({ onSearch }) {
  const [cityName, setCityName] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState('');
  const [cities, setCities] = useState([]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(state ? statesAndCities[state] : []);
  };

  const handleSpecialityChange = (e) => {
    setSelectedSpeciality(e.target.value);
  };

  const handleSearchSpeciality = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(); // Correctly calls the onSearch prop
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <Form fluid="md" onSubmit={handleSearch}>
        <Form.Group as={Row} className="mb-3" controlId="formState">
          <Form.Label column sm="2"></Form.Label>
          <Col sm="10">
            <Form.Select value={selectedState} onChange={handleStateChange}>
              <option value="">Selecione um Estado</option>
              {Object.keys(statesAndCities).map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formCity">
          <Form.Label column sm="2"></Form.Label>
          <Col sm="10">
            <Form.Select value={cityName} onChange={(e) => setCityName(e.target.value)} disabled={!selectedState}>
              <option value="">Selecione uma Cidade</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formSpeciality">
          <Form.Label column sm="2"></Form.Label>
          <Col sm="10">
            <Form.Select value={selectedSpeciality} onChange={handleSpecialityChange}>
              <option value="">Selecione uma Especialidade</option>
              {speciality.especialidades.map((especialidade) => (
                <option key={especialidade} value={especialidade}>{especialidade}</option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>

        <Row>
          <Form.Label column sm="2"></Form.Label>
          <Col className="text-center">
            <Button type="submit">Pesquisar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default SearchBox;
