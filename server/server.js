const express = require('express');
const path = require('path');
const axios = require('axios');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
  windowMs: 10 * 1000,
  max: 3,
});

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/api/', limiter);

app.get('/api/:query/:sort', (req, res) => {
  axios.get('https://api.github.com/search/repositories', {
    params: {
      q: req.params.query,
      per_page: 100,
      ...(req.params.sort !== 'default' ? { sort: req.params.sort } : {}),
    },
  })
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => res.status(err.response.status).send(err));
});

app.get('/details', (req, res) => {
  res.redirect('/');
});

module.exports = app;
