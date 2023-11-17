import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../types/characters';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
      <div style={{ position: 'relative' }}>
        <img src={character.image} alt={character.name} />
        <FavoriteIcon
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
          color={isHeartClicked ? 'error' : 'action'}
          onClick={handleHeartClick}
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