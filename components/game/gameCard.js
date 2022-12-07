import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

function GameCard({ obj }) {
  return (
    <Card>
      <Link href={`/games/${obj.id}`} passHref>
        <Card.Title>{obj.title}</Card.Title>
      </Link>
    </Card>
  );
}

GameCard.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default GameCard;
