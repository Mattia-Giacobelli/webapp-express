const express = require('express')
const app = express()
const PORT = 3000

//Import cors
const cors = require('cors')

//Import router
const moviesRouter = require('./routes/movies')

//Import error middlewares
const notFound = require('./middlewares/notFound')
const serverError = require('./middlewares/serverError')

//Use cors middleware
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())

app.use(express.static('public'))

app.use('/api/movies/', moviesRouter)


app.get('/', (req, res) => {
    res.send('Film db')
})

app.use(notFound)
app.use(serverError)

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);

})