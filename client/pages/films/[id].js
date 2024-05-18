import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const FilmDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [filmDetails, setFilmDetails] = useState(null); // État pour stocker les détails du film

  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/films/${id}`);
        setFilmDetails(response.data); // Mettre à jour les détails du film dans l'état
      } catch (error) {
        console.error('Error fetching film details:', error);
      }
    };

    if (id) {
      fetchFilmDetails(); // Appeler la fonction de chargement des détails du film si l'ID est disponible
    }
  }, [id]); // Déclencher le chargement des détails du film lorsque l'ID change

  return (
    <div>
      <h1>Détails du Film ID: {id}</h1>
      {filmDetails ? (
        <div>
          <h2>{filmDetails.title}</h2>
          <p>Description: {filmDetails.description}</p>
          <p>Année: {filmDetails.year}</p>
          {/* Autres détails du film */}
        </div>
      ) : (
        <p>Chargement des détails du film...</p>
      )}
    </div>
  );
};

export default FilmDetailsPage;
