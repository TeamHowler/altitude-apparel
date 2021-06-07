// create routes using express.Router()
const products = require('../controllers/products.js');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

// Connect controller methods to their corresponding routes
router.get('/', products.getAll);

router.get('/:product_id', products.getOne);

router.get('/:product_id/styles', products.getStyles);


module.exports = router;
