// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors=require('cors');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true,
}));
// Middleware
app.use(express.json());


// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to Green Harvest Project API');
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
