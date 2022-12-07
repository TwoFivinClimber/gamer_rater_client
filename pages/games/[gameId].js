import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleGame } from '../../utils/data/gameData';

function GameDetail() {
  const [game, setGame] = useState({});
  const router = useRouter();
  const { gameId } = router.query;

  useEffect(() => {
    getSingleGame(gameId).then(setGame);
  }, [router, gameId]);

  return (
    <>
      <GameDetail obj={game} />
    </>
  );
}

export default GameDetail;
