// pages/films/index.js
import React from 'react';
import { useRouter } from 'next/router'; // Importer le hook useRouter
import FilmList from '../../components/FilmList';
import 'bootstrap/dist/css/bootstrap.min.css';

const FilmsPage = () => {
  const router = useRouter(); // Initialiser le hook useRouter

  // Exemple de données de films
  const filmsData = [
    { id: 1, title: 'Film 1', description: 'Description du Film 1', year: 2021 },
    { id: 2, title: 'Film 2', description: 'Description du Film 2', year: 2022 },
    { id: 3, title: 'Film 3', description: 'Description du Film 3', year: 2023 },
  ];

  const handleEdit = (id) => {
    // Logique pour l'édition du film avec l'ID donné
    console.log('Édition du film avec ID:', id);
  };

  const handleDelete = (id) => {
    // Logique pour la suppression du film avec l'ID donné
    console.log('Suppression du film avec ID:', id);
  };

  const handleAdd = () => {
    // Rediriger vers la page de création de nouveau film
    router.push('/films/new');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Liste des Films</h1>
        <button className="btn btn-success btn-sm" onClick={handleAdd}>Ajouter</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Année</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filmsData.map((film) => (
            <tr key={film.id}>
              <td>{film.id}</td>
              <td>{film.title}</td>
              <td>{film.description}</td>
              <td>{film.year}</td>
              <td>
                <button className="btn btn-primary btn-sm mr-2" onClick={() => handleEdit(film.id)}>Éditer</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(film.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilmsPage;
