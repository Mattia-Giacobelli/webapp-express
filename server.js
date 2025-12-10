const express = require('express')
const app = express()
const PORT = 3000

//Import router
const moviesRouter = require('./routes/movies')

//Import middlewares
const notFound = require('./middlewares/notFound')

app.use(express.json())

app.use(express.static('public'))

app.use('/api/movies/', moviesRouter)


app.get('/', (req, res) => {
    res.send('Film db')
})

app.use(notFound)

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);

})