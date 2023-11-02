const express = require("express");
const route = express.Router();


route.get('/', async (req, res) => {

    if(req.cookies.access_token) {
        res.redirect('/overview');
    } else {
        res.render("welcome");
    }

});

module.exports = route;