const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render("auth/register");
});

module.exports = router;
