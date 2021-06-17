const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const productRouter = require('./routes/productRouter.js');
const reviewRouter = require('./routes/reviewRouter.js');
const questionRouter = require('./routes/questionRouter.js');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());

// Set up our routes
app.use('/products', productRouter);
app.use('/reviews', reviewRouter);
app.use('/qa/questions/', questionRouter);


module.exports = app;
