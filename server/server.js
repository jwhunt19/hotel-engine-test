const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/api/:query/:sort', (req, res) => {
  // todo - limit requests to not break github api
  axios.get('https://api.github.com/search/repositories', {
    params: {
      q: req.params.query,
      per_page: 100,
      ...(req.params.sort !== 'default' ? { sort: req.params.sort } : {}),
    },
  })
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

app.get('/details', (req, res) => {
  res.redirect('/');
});

module.exports = app;
