const express = require('express');
const router = express.Router();

// import controller methods

const { create, list } = require('../controllers/post');

router.get('/posts', list);

router.post('/post', create);

module.exports = router;