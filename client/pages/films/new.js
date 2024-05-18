import React, { useState } from 'react';
import axios from 'axios';
import FilmList from '../../components/FilmList';
import AddFilmForm from '../../components/AddFilmForm';
import { useRouter } from 'next/router'; // Importer le hook useRouter

const NewFilmPage = () => {
  const [films, setFilms] = useState([]);
  const router = useRouter(); // Initialiser le hook useRouter

  const handleFilmAdded = (newFilm) => {
    setFilms([...films, newFilm]); // Ajouter le nouveau film à la liste existante
    router.push('/films/new');

  };

  return (
    <div>
      <h1>Ajouter un Nouveau Film</h1>
      <AddFilmForm onFilmAdded={handleFilmAdded} />
      
    </div>
  );
};

export default NewFilmPage;

