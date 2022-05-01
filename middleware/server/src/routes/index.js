const express = require('express');

module.exports = function (config) {
    const router = new express.Router();

    router.get('/index', (req, res) => {
        res.send("Index route is alive");
    });

    return router;
}