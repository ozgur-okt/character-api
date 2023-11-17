import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCard from '../components/CharacterCard';
import { fetchCharacters } from '../redux/characters/actions';
import { RootState } from '../redux/store';
import { Character } from '../types/characters';


const Characters: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [characters, setCharacters] = useState<Character[]>([]);

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

  return (
    <div>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;