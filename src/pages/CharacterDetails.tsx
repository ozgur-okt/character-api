import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Character } from '../types/characters'


const CharacterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [character, setCharacter] = useState<Character | null>(null)

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const data = await response.json()
      setCharacter(data)
    }

    fetchCharacter()
  }, [id])

  return (
    <div>
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
    </div>
  )
}

export default CharacterDetails