const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const port = process.env.PORT || 2000;
const app = express();

//Connect To Database
connectDB();

//Cors
app.use(cors(corsOptions));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setup Routes For Which The Server Is Listening
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend/build', 'index.html')));
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

//Middleware
app.use(errorHandler);

//Server Running
app.listen(port, () => console.log(`Server started on port ${port}`));
