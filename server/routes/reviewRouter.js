const reviews = require('../controllers/reviews.js');
const express = require('express');
// eslint-disable-next-line new-cap
const reviewRouter = express.Router();

// Connect controller methods to their corresponding routes
reviewRouter.get('/:product_id', reviews.getAll);

reviewRouter.get('/meta/:product_id', reviews.getMeta);

module.exports = reviewRouter;
