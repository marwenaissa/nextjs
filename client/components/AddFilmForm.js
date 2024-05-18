import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importer le fichier CSS de Bootstrap

const AddFilmForm = ({ onFilmAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/newfilm', {
        title,
        description,
        year: parseInt(year) // Assurez-vous de convertir l'année en nombre entier
      });
      const newFilm = response.data;
      onFilmAdded(newFilm); // Appel de la fonction de rappel avec le nouveau film ajouté
      setTitle('');
      setDescription('');
      setYear('');
    } catch (error) {
      console.error('Error adding film:', error);
    }
  };

  return (
    <form className="container mt-5" onSubmit={handleSubmit}> {/* Ajouter la classe container de Bootstrap */}
      <label htmlFor="title">Titre :</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control" // Ajouter la classe form-control de Bootstrap
        required
      />
      <br />
      <label htmlFor="description">Description :</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control" // Ajouter la classe form-control de Bootstrap
        required
      />
      <br />
      <label htmlFor="year">Année :</label>
      <input
        type="number"
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="form-control" // Ajouter la classe form-control de Bootstrap
        required
      />
      <br />
      <button type="submit" className="btn btn-primary">Ajouter Film</button> {/* Ajouter les classes btn et btn-primary de Bootstrap */}
    </form>
  );
};

export default AddFilmForm;
