const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname + '/src')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:3000')
})
