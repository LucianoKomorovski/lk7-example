import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Bienvenido al server de lk7</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>Acerca de mi server, aguante boca</h1>')
})

app.listen(3000)

console.log('server on port', 3000)

