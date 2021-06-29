const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/:restaurant/menu', (req, res) =>
{
    console.log(req.params.restaurant);
    res.sendStatus(200)
})

app.post('/restaurant', (req, res) =>{
    console.log(req.body);
    res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})