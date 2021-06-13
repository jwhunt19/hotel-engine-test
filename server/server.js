const express = require('express')
const path = require('path')
const axios = require('axios')

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'dist')))

app.get('/api/:query/:sort', (req, res) => {
  // todo - limit requests to not break github api
  if (req.params.sort === 'default') {
    axios.get(`https://api.github.com/search/repositories`, {
      params: {
        q: req.params.query,
        per_page: 100
      }
    })
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.send(err))
  } else {
    axios.get(`https://api.github.com/search/repositories`, {
      params: {
        q: req.params.query,
        per_page: 100,
        sort: req.params.sort
      }
    })
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.send(err))    
  }
})

module.exports = app