import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleGame } from '../../utils/data/gameData';
import GameDetail from '../../components/game/gameDetail';

function SingleGameView() {
  const [game, setGame] = useState({});
  const router = useRouter();
  const { gameId } = router.query;

  useEffect(() => {
    getSingleGame(gameId).then(setGame);
  }, [gameId]);

  return (
    <>
      <GameDetail obj={game} />
    </>
  );
}

export default SingleGameView;
