const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const routes = require('./routes/index')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes)

app.get('/', (req, res) => {
  res.send('Hello Ignaway')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})