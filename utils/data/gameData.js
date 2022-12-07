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

export { getAllGames, getSingleGame };
