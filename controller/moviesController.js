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

//Show
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

//Store review
function storeReview(req, res) {

    const id = req.params.id



    const { name, vote, text } = req.body
    console.log(req.body);

    //Store review query
    const sql = 'INSERT INTO reviews (movie_id, name, vote, text) VALUES (?,?,?,?)'


    //Add validation for blank fields
    if (name === "") {
        return res.json({ status: 400, error: "Name field can't be empty" })
    } else if (vote === "") {
        return res.json({ status: 400, error: "Vote field can't be empty" })
    } else if (text === "") {
        return res.json({ status: 400, error: "Text field can't be empty" })
    }


    connection.query(sql, [id, name, vote, text], (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })

        res.status(201).json({ request: "received", id: results.id })
    })
}

module.exports = { index, show, storeReview }