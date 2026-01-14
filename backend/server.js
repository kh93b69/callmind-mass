const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Тестовый роут
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: '🚀 CallMind SaaS API работает!',
    version: '1.0.0'
  });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 CallMind SaaS сервер запущен на порту ${PORT}`);
});
