const express = require('express');

module.exports = function (config) {
    const router = new express.Router();

    router.get('/index', (req, res) => {
        res.send(new Date().toISOString());
    });

    return router;
}