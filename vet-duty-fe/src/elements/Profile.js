// ProfileCard.js
import React from 'react';
import { Card, ListGroup, ProgressBar } from 'react-bootstrap';

const Profile = () => {

    const profileDetails = {
        name: "Andre M.",
        title: "Project Manager & Java Expert",
        progress: 100, // progresso do perfil em porcentagem
        details: [
          { label: "Promote your profile", value: "Availability badge", status: "Off" },
          { label: "Boost your profile", value: "NEW", status: "Off" },
          // ... outros detalhes do perfil ...
        ],
      };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{profileDetails.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{profileDetails.title}</Card.Subtitle>
        <ProgressBar now={profileDetails.progress} label={`${profileDetails.progress}%`} className="mb-3" />
        <ListGroup variant="flush">
          {profileDetails.details.map((detail, index) => (
            <ListGroup.Item key={index}>
              {detail.label}
              <span className="float-end text-muted">{detail.value} - {detail.status}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Profile;
