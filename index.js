const express = require('express');
require('dotenv').config()
const app = express();
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const db = require('./models');

db.sequelize.sync({ force: false }).then(() => {
  console.log('Database & tabel siap');
});

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
