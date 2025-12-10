const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send('Film db')
})



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);

})