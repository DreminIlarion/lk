const express = require('express');
const path = require('path');
const app = express();

// Раздача статических файлов React
app.use(express.static(path.join(__dirname, 'build')));

// Прокси для запросов на API
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/rec_sys', createProxyMiddleware({
  target: 'https://tyuiu-fastapi-rec-sys.onrender.com',
  changeOrigin: true,
}));

// Маршрут для всех остальных запросов (React SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Порт из переменной окружения
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});