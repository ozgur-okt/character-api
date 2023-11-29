// OtherCharacters.tsx
import React from 'react';
import { OtherCharactersProps } from '../types/characters';
import { Link } from 'react-router-dom';
import styles from '../styles/components/OtherCharacters.module.scss';

const OtherCharacters: React.FC<OtherCharactersProps> = ({ characters }) => {
  return (
    <div className={styles.otherCharacters}>
      <h2>Other Characters</h2>
      {characters.length > 0 ?
        characters.map((character) => (
          <Link key={character.id} to={`/characters/${character.id}`} className={styles.character}>
            <img src={character.image} alt={character.name} className={styles.characterImage} />
            <div className={styles.info}>
              <h2>{character.name}</h2>
              <p className={styles.location}>{character.location.name}</p>
              <p>{character.gender}</p>
            </div>
          </Link>
        ))
        : <p>No other characters found with the same location and status</p>
      }
    </div>
  );
};

export default OtherCharacters;