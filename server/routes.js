// create routes using express.Router()
const products = require('./controllers/products.js');
const reviews = require('./controllers/reviews.js');
const express = require('express');
const router = express.Router();

// Connect controller methods to their corresponding routes
router.get('/', products.getAll);

router.get('/:product_id', products.getOne);

router.get('/:product_id/styles', products.getStyles);

// router.get('/reviews/:product_id', reviews.getAll);

// router.post('/messages', controller.messages.post);

// router.get('/users', controller.users.get);

// router.post('/users', controller.users.post);


module.exports = router;
