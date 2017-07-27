var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.json(users);
  });
});

router.post('/', function(req, res) {
  models.User.create({
    name: req.body.name
  }).then(function(user) {
    res.json(user);
  });
});

module.exports = router;
