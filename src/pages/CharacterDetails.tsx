// CharacterDetails.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../types/characters';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
 
import styles from '../styles/pages/CharacterDetails.module.scss';
import OtherCharacters from '../components/OtherCharacters';

const CharacterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const characters = useSelector((state: RootState) => state.characters.characters);
  const character = characters.find((character: Character) => character.id === Number(id));

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (character) {
      setIsLoading(false);
    }
  }, [character]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const otherCharacters = characters.filter((character: Character) => character.id !== Number(id)).slice(0, 2);

  return (
    <div className={styles.container}>
      {character && (
        <div>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <div>
            <span>Status: {character.status}</span>
            <span>Species: {character.species}</span>
          </div>
          <p>Gender: {character.gender}</p>
          <p>Current Location: {character.location.name}</p>
        </div>
      )}
      <OtherCharacters characters={otherCharacters} />
    </div>
  );
};

export default CharacterDetails;