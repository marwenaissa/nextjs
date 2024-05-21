const express = require('express'); const app
= express();

app.use(express.json());
const cors = require('cors');
app.use(cors());
/* app.use(bodyParser.json());
 */
const filmsData = [
    { id: 1, title: 'Film 1', description: 'Description du Film 1', year: 2021 },
    { id: 2, title: 'Film 2', description: 'Description du Film 2', year: 2022 },
    { id: 3, title: 'Film 3', description: 'Description du Film 3', year: 2023 },
    // Ajoutez d'autres films ici
  ];
  
// Endpoint pour récupérer la liste des films
app.get('/films', (req, res) => {
    res.json(filmsData); // Renvoie la liste des films au format JSON
});

// Endpoint pour ajouter un nouveau film
app.post('/newfilm', (req, res) => {
    const { title, description, year } = req.body;
    const newFilm = { id: filmsData.length + 1, title, description, year };
    filmsData.push(newFilm);
    res.status(201).json(newFilm); // Renvoie le nouveau film ajouté au format JSON avec le code HTTP 201 (Created)
  });

// Endpoint pour récupérer les détails d'un film par son ID
app.get('/films/:id', (req, res) => {
    
    const { id } = req.params;
    const film = filmsData.find(f => f.id === parseInt(id));
  
    if (!film) {
      return res.status(404).json({ message: 'Film not found' });
    }
  
    res.json(film);
  });

app.get('/',(req, res) => {
    console.log(req);
    res.send(req.query.prenom);
    });





app.listen(3002, () => {
    console.log("Serveur démarré");
});