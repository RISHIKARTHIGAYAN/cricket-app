// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const newsRoutes = require('./routes/newsRoutes')
const userRoutes = require('./routes/userRoutes')
// const playerRoutes = require('./routes/playerRoutes'); 
const cors = require('cors')
const app = express();
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cric_01', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/news',newsRoutes);
app.use('/users',userRoutes);
// app.use('/player', playerRoutes);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
