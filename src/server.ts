require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import goalsRouter from './routes/goals';
const MONGO_URI = process.env.MONGO_URI;
const cors = require('cors');

const app = express();

app.use(cors());

if (!MONGO_URI) {
    throw new Error('MONGODB is not defined');
}

// Connect to MongoDB (optional)
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/goals', goalsRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});