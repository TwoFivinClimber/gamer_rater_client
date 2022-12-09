import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function GameDetail({ obj }) {
  return (
    <Card>
      <Card.Title>{obj.title}</Card.Title>
      <Card.Text>Creator: {obj.designer}</Card.Text>
      <Card.Text>Released in {obj.yearReleased?.split('-')[0]}</Card.Text>
      <Card.Text>For up to {obj.numberOfPlayers} players</Card.Text>
      <Card.Text>Recommended Age: {obj.recAge}</Card.Text>
      <Card.Text>Approx {obj.playTime}min game time</Card.Text>
    </Card>
  );
}
GameDetail.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    designer: PropTypes.string,
    yearReleased: PropTypes.string,
    numberOfPlayers: PropTypes.number,
    recAge: PropTypes.number,
    playTime: PropTypes.number,
  }).isRequired,
};

export default GameDetail;
