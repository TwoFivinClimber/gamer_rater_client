import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import GameCard from '../../components/game/gameCard';
import { getAllGames } from '../../utils/data/gameData';
// import GameCard from '../../components/game/gameCard';

export default function DeleteMe() {
  const [games, setGames] = useState([]);
  const router = useRouter();

  const getTheContent = () => {
    getAllGames().then(setGames);
  };

  useEffect(() => {
    getTheContent();
  }, []);

  return (
    <>
      <h1>Games</h1>
      {games.map((game) => (
        <GameCard key={game.id} obj={game} />
      ))}
      <Button onClick={() => router.push('/games/edit/new')}>Register New Game</Button>
    </>
  );
}
