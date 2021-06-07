const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const productRouter = require('./routes/productRouter.js');
const reviewRouter = require('./routes/reviewRouter.js');
const questionRouter = require('./routes/questionRouter.js');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

// Set up our routes
app.use('/products', productRouter);
app.use('/reviews/', reviewRouter);
app.use('/qa/questions/', questionRouter);


app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
