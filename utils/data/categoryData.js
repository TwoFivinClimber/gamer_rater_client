import { clientCredentials } from '../client';

const dbUrl = clientCredentials.databaseURL;

const getCategories = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/categories`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createGameCategory = (obj) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/gamecategories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(obj),
  }).then((response) => resolve(response.json))
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export { createGameCategory, getCategories };
