const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Kết nối tới MongoDB
mongoose.connect('mongodb+srv://lethibinhminh1307:AhQ7TmLvIVDUZu1e@user-manager.j04zi.mongodb.net/?retryWrites=true&w=majority&appName=user-manager')
.then(() => {
  console.log('Connected to MongoDB');
}).catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

