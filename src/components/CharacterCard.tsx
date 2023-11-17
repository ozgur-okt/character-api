import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../types/characters';
import whiteHeartIcon from '../assets/white-heart.svg'
import redHeartIcon from '../assets/red-heart.svg'
import styles from '../styles/CharacterCard.module.scss'

type CharacterProps = {
  character: Character;
};

const CharacterCard: React.FC<CharacterProps> = ({ character }) => {
  const [isHeartClicked, setHeartClicked] = useState(false);

  const handleHeartClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setHeartClicked(!isHeartClicked);
  };
  return (
    <Link to={`/characters/${character.id}`}>
      <div className={styles.card}>
        <img src={character.image} alt={character.name} />
        <img 
        src={isHeartClicked ? redHeartIcon : whiteHeartIcon} 
        alt="heart" 
        onClick={handleHeartClick} 
        style={{ position: 'absolute', top: 10, right: 10 }}
        height={40}
        width={40} 
         />
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;