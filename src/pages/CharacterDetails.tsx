// CharacterDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../types/characters';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import styles from '../styles/pages/CharacterDetails.module.scss';

const CharacterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const characters = useSelector((state: RootState) => state.characters.characters);
  const character = characters.find((character: Character) => character.id === Number(id));

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
      <div className={styles.otherCharacters}>
        <h2>Other Characters</h2>
        {otherCharacters.map((character: Character) => (
          <div key={character.id} className={styles.otherCharacter}>
            <img src={character.image} alt={character.name} className={styles.otherCharacterImage} />
            <div>
              <h2>{character.name}</h2>
              <div>
                <span>Status: {character.status}</span>
                <span>Species: {character.species}</span>
              </div>
              <p>Gender: {character.gender}</p>
              <p>Current Location: {character.location.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterDetails;