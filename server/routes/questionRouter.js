const questions = require('../controllers/questions.js');
const express = require('express');
// eslint-disable-next-line new-cap
const questionRouter = express.Router();

// Connect controller methods to their corresponding routes
questionRouter.get('/:product_id', questions.getAll);

questionRouter.get('/:question_id/answers', questions.getAnswers);

module.exports = questionRouter;
