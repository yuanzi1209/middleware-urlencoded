const express = require('express')
const app = express()

const myBodyParser = require('./module')
app.use(myBodyParser)

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(80, () => {
    console.log(`express server runnning at http://127.0.0.1:80`)
})