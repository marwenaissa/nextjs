import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('http://localhost:3002/films');
        setFilms(response.data);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <h3>{film.title}</h3>
          <p>Description: {film.description}</p>
          <p>Année: {film.year}</p>
        </li>
      ))}
    </ul>
  );
};

export default FilmList;
