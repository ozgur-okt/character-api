import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../types/characters';

type CharacterProps = {
  character: Character;
};

const CharacterCard: React.FC<CharacterProps> = ({ character }) => {
  return (
    <Link to={`/characters/${character.id}`}>
      <div>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;