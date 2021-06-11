const reviews = require('../controllers/questions.js');
const express = require('express');
// eslint-disable-next-line new-cap
const questionRouter = express.Router();

// Connect controller methods to their corresponding routes
questionRouter.get('/:product_id', reviews.getAll);

questionRouter.get('/:question_id/answers', reviews.getAnswers);

module.exports = questionRouter;
