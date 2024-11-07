// server.js
const mongoose = require('mongoose');
const app = require('./app');

// Connect to MongoDB
const mongoURL = 'mongodb://localhost:27017/cruddb'; // Replace with your MongoDB connection string

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB Connection Error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
