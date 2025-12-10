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

}


module.exports = { index, show }