import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../types/characters';


const CharacterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  return (
    <div>
      {character && (
        <>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Current Location: {character.location.name}</p>
        </>
      )}
    </div>
  );
};

export default CharacterDetails;