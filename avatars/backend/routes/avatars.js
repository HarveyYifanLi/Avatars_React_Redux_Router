const express = require('express');
const router = express.Router();
const Avatar = require('../models/avatar');

router.get('/', function(req, res, next){
    Avatar.find({})
    .then(avatars => res.send(avatars))
    .catch(err => next(err));
});

router.post('/', function(req, res, next){
    Avatar.create(req.body)
    .then(avatar => res.status(201).send(avatar))
    .catch(err => next(err));
});

router.delete('/:id', function(req, res, next){
    Avatar.findByIdAndRemove(req.params.id)
    .then(avatar => res.send(avatar))
    .catch(err => next(err));
});

module.exports = router;

