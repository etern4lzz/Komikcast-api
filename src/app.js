const express = require('express');
const mangaController = require('../src/controllers/mangaControllers');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/api/manga', async (req, res) => {
  const result = await mangaController.getMangaInfo(req);
  res.json(result);
});

app.get('/api/manga/genre', async (req, res) => {
  const result = await mangaController.getMangaGenre(req);
  res.json(result);
});

app.get('/api/manga/meta', async (req, res) => {
  const result = await mangaController.getMangaMeta(req);
  res.json(result);
});

app.get('/api/manga/details', async (req, res) => {
  const result = await mangaController.getDetailManga(req);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});