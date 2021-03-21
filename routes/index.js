var express = require('express');
const path = require("path");
var router = express.Router();

/* GET home page. */
router.get(['/', '/:slug', '/:slug/*'], function(req, res, next) {

  res.render('index', Object.assign({}, req.params, {title:'Example application'}));
});

module.exports = router;
