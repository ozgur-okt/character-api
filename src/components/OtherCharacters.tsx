// OtherCharacters.tsx
import React from 'react';
import { OtherCharactersProps } from '../types/characters';
import { Link } from 'react-router-dom';
import styles from '../styles/components/OtherCharacters.module.scss';

const OtherCharacters: React.FC<OtherCharactersProps> = ({ characters }) => {
  return (
    <div className={styles.otherCharacters}>
      <h2>Other Characters</h2>
      {characters.map((character) => (
        <Link key={character.id} to={`/characters/${character.id}`} className={styles.otherCharacter}>
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
        </Link>
      ))}
    </div>
  );
};

export default OtherCharacters;