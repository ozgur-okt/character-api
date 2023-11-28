import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Character } from '../types/characters'
import CharacterCard from '../components/CharacterCard'
import styles from '../styles/pages/MyFavorites.module.scss'

function MyFavorites() {
  const favorites = useSelector((state: RootState) => state.favorites.favorites)
  const [favoritesList, setFavoritesList] = useState<Character[]>(favorites)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (favoritesList.length === 0) {
      const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites') || '[]')
      setFavoritesList(favoritesFromStorage)
    }
    setIsLoading(false);
  }, [favoritesList.length])

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let mock = [character, character, character, character]

  return (
    <div className={styles.container}>
      {mock.length > 0 ? (
        mock.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))
      ) : (
        <p>Your favorites list is empty.</p>
      )}
    </div>
  )
}

export default MyFavorites