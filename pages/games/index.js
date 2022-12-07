import React, { useEffect, useState } from 'react';
import GameCard from '../../components/game/gameCard';
import { getAllGames } from '../../utils/data/gameData';
// import GameCard from '../../components/game/gameCard';

export default function DeleteMe() {
  const [games, setGames] = useState([]);

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
        <GameCard obj={game} />
      ))}
    </>
  );
}
