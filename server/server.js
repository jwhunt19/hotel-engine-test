const express = require('express')
const path = require('path')
const axios = require('axios')

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'dist')))

app.get('/api/:query', (req, res) => {
  // todo - limit requests to not break github api
  axios.get(`https://api.github.com/search/repositories?q=${req.params.query}`)
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.send(err))
})

module.exports = app