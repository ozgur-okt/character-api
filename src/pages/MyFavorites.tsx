import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Character } from '../types/characters'
import CharacterCard from '../components/CharacterCard'

function MyFavorites() {
  const favorites = useSelector((state: RootState) => state.favorites.favorites)
  const [favoritesList, setFavoritesList] = useState<Character[]>(favorites)

  useEffect(() => {
    if (favoritesList.length === 0) {
      const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites') || '[]')
      setFavoritesList(favoritesFromStorage)
    }
  }, [favoritesList.length])

  return (
    <div>
      {favoritesList.length > 0 ? (
        favoritesList.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))
      ) : (
        <p>Your favorites list is empty.</p>
      )}
    </div>
  )
}

export default MyFavorites