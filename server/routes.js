// create routes using express.Router()
const controller = require('./controllers');
const router = require('express').Router();

// Connect controller methods to their corresponding routes
router.get('/products', controller.products.getAll);

router.get('/products/:product_id', controller.products.getOne);

// router.post('/messages', controller.messages.post);

// router.get('/users', controller.users.get);

// router.post('/users', controller.users.post);


module.exports = router;
