import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Character } from '../types/characters'
import CharacterCard from '../components/CharacterCard'
import styles from '../styles/pages/MyFavorites.module.scss'

const MyFavorites: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites)
  const [favoritesList, setFavoritesList] = useState<Character[]>([])

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavoritesList(favorites.length > 0 ? favorites : favoritesFromStorage)
  }, [favorites])

  if (!favoritesList) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
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