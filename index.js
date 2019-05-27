const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send({ status: true, version: 4 }))

app.listen(port, () => console.log(`Server listening on port ${port}!`))