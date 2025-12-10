const express = require('express')

//Connect the database
const connection = require('../database/connection')

//Index
function index(req, res) {
    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        res.json(results)
    })
}


function show(req, res) {
    const id = Number(req.params.id)
    //Movie query
    const sql = 'SELECT * FROM movies WHERE id = ?'
    //Movie's review query
    const sqlReview = 'SELECT * FROM reviews WHERE movie_id = ?'

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        if (results.length === 0) return res.status(404).json({ error: true, message: 'Not Found' })

        movie = results[0]

        connection.query(sqlReview, [id], (errReview, resultsReview) => {
            if (errReview) return res.status(500).json({ error: true, message: err.message })
            if (resultsReview.length === 0) return res.status(404).json({ error: true, message: 'Not Found' })

            movie.reviews = resultsReview

            res.json(movie)
        })
    })

}


module.exports = { index, show }