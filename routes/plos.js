var express = require('express');
var router = express.Router();
var path = require('path');
const asyncHandler = require('express-async-handler');
const Models = require('../sequelize');

/* GET /plos listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  res.render('plos', {
    title: 'PLOs',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
  });
}));

module.exports = router;
