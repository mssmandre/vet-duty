import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, InputGroup, FormControl, Button, Tab, Tabs, Badge } from 'react-bootstrap';
import Profile from './Profile';

function JobListings() {
    const [jobs, setJobs] = useState([
        {
          "id": 1,
          "title": "Veterinário de Internação",
          "description": "Procuramos um veterinário dedicado para fornecer cuidados de saúde durante a internação dos nossos pacientes. Responsabilidades incluem monitoramento contínuo da saúde, administração de medicamentos e comunicação com os tutores sobre o progresso dos animais.",
          "postedTime": "1 hora atrás",
          "tags": ["Veterinária", "Internação", "Cuidado Animal", "Medicina Veterinária", "Emergência"],
          "salary": "R$3000-R$5000 por mês",
          "duration": "Indeterminado",
          "workload": "40-50 horas/semana",
          "location": "São Paulo, Brasil"
        },
        {
          "id": 2,
          "title": "Veterinário de Ortopedia",
          "description": "Clínica especializada busca veterinário com experiência em ortopedia para integrar nossa equipe. O candidato ideal terá habilidades com cirurgias ortopédicas, diagnóstico e tratamento de lesões e doenças musculoesqueléticas em animais.",
          "postedTime": "2 horas atrás",
          "tags": ["Veterinária", "Ortopedia", "Cirurgia Veterinária", "Diagnóstico", "Tratamento"],
          "salary": "R$4000-R$6000 por mês",
          "duration": "Indeterminado",
          "workload": "40 horas/semana",
          "location": "Rio de Janeiro, Brasil"
        }
      ]);

      const [searchTerm, setSearchTerm] = useState('');
      const [filteredJobs, setFilteredJobs] = useState(jobs);
    
      const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const handleSearch = () => {
        if (!searchTerm) {
          setFilteredJobs(jobs); // Se não houver searchTerm, mostre todos os empregos
        } else {
          setFilteredJobs(
            jobs.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()))
          );
        }
      };
    
      return (
        <Container fluid>
          <Row>
            {/* Sidebar */}
            <Col md={3}>
              <Profile />
            </Col>
            
            {/* Right Content */}
            <Col md={9}>
              {/* Promotional Banner */}
              <div className="p-3 mb-2 bg-primary text-white">
                <h2>Stand out and win more work</h2>
                <p>Ads are a proven way to help you get hired at any stage of your career.</p>
                <Button variant="light">Show me how</Button>
              </div>
      
              {/* Search Bar */}
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search for jobs"
                  aria-label="Search for jobs"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
                  Search
                </Button>
              </InputGroup>
      
              {/* Job List */}
              <Tabs defaultActiveKey="bestMatches" id="job-list-tabs" className="mb-3">
                <Tab eventKey="bestMatches" title="Best Matches">
                  {filteredJobs.map((job) => (
                    <Card key={job.id} className="mb-3">
                      <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Text>{job.description}</Card.Text>
                        <div>
                          {job.tags.map((tag, index) => (
                            <Badge pill bg="secondary" className="me-2" key={index}>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </Card.Body>
                      <ListGroup variant="flush">
                        <ListGroup.Item>Posted: {job.postedTime}</ListGroup.Item>
                        <ListGroup.Item>Salary: {job.salary}</ListGroup.Item>
                        <ListGroup.Item>Duration: {job.duration}</ListGroup.Item>
                        <ListGroup.Item>Workload: {job.workload}</ListGroup.Item>
                        <ListGroup.Item>Location: {job.location}</ListGroup.Item>
                      </ListGroup>
                      <Card.Body>
                        <Button variant="primary">Apply Now</Button>
                      </Card.Body>
                    </Card>
                  ))}
                </Tab>
                {/* Você pode adicionar mais Tabs para "Most Recent", "Saved Jobs", etc., aqui */}
              </Tabs>
            </Col>
          </Row>
        </Container>
      );
    }
    
    export default JobListings;