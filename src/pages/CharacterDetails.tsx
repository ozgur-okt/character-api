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
  //const character = characters.find((character: Character) => character.id === Number(id));
  const character = {
    "id": 45,
    "name": "Bill",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/45.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/3"
    ],
    "url": "https://rickandmortyapi.com/api/character/45",
    "created": "2017-11-05T10:22:27.446Z"
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (character) {
      setIsLoading(false);
    }
  }, [character]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //const otherCharacters = characters.filter((character: Character) => character.id !== Number(id)).slice(0, 2);
  const otherCharacters = [character, character]
  return (
    <div className={styles.container}>
      {character && (
        <div className={styles.character}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <div className={styles.info}>
            <div className={styles.status}>
              <span className={styles[`status${character.status}`]}>{character.status}</span>
              <span> - </span>
              <span> {character.species}</span>
            </div>
            <span className={styles.gender}><i>{character.gender}</i></span>
          </div>
          <span className={styles.location}><i>{character.location.name}</i></span>
        </div>
      )}
      <OtherCharacters characters={otherCharacters} />
    </div>
  );
};

export default CharacterDetails;