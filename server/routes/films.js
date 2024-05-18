const express = require('express');
const router = express.Router();
app.use(express.json());

const filmsData = [
  { id: 1, title: 'Film 1' },
  { id: 2, title: 'Film 2' },
  { id: 3, title: 'Film 3' },
  // Ajoutez d'autres films ici
];

// Route pour récupérer la liste des films
router.get('/', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.json(filmsData);
});

module.exports = router;