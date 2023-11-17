import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import { Character } from '../types/characters';


const Characters: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
      const data = await response.json();
      const characterResponses = await Promise.all(
        data.residents.map((url: string) => fetch(url))
      );
      const characters = await Promise.all(
        characterResponses.map((response: Response) => response.json())
      );
      setCharacters(characters);
    };

    fetchCharacters();
  }, [id]);

  const filteredCharacters = selectedStatus
    ? characters.filter(character => character.status === selectedStatus)
    : characters;

  return (
    <div>
      <button onClick={() => setSelectedStatus('Alive')}>Alive</button>
      <button onClick={() => setSelectedStatus('Dead')}>Dead</button>
      <button onClick={() => setSelectedStatus('Unknown')}>Unknown</button>
      <Link to="/favorites">Go to My Favorites</Link>
      {filteredCharacters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;