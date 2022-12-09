import { clientCredentials } from '../client';

const dbUrl = clientCredentials.databaseURL;

const getAllGames = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/games`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleGame = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/games/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .then(reject);
});

const createGame = (obj) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/games`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getAllGames, getSingleGame, createGame };
