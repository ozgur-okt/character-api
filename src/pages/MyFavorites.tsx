import { useEffect, useState } from 'react'
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

 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //let mock = [character, character, character, character]

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