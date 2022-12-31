const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 2000;
const app = express();

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setup Routes For Which The Server Is Listening
app.use('/api/goals', require('./routes/goalRoutes'));

//Middleware
app.use(errorHandler);

//Server Running
app.listen(port, () => console.log(`Server started on port ${port}`));
