function serverError(err, req, res, next) {

    console.log('500 works');


    res.status(500)
    res.json({
        "status": 500,
        "error": err.message
    })
}

module.exports = serverError