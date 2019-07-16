const BASE_URL = '/api/habits/';

export default {
  index,
  create
};

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

function create(habit) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(habit)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}
