const express = require('express');
const cors = require('cors');
const { authenticateDatabase } = require('./config/db');

const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/event', eventRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

authenticateDatabase();
