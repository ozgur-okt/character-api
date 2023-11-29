import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Character, CharacterProps } from '../types/characters'
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'
import { addToFavorites, removeFromFavorites } from '../redux/favorites/actions'
import whiteFavoriteIcon from '../assets/white-favorite.svg'
import redFavoriteIcon from '../assets/red-favorite.svg'
import styles from '../styles/components/CharacterCard.module.scss'

const useFavorites = (character: Character) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favoritesFromStorage: Character[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    const isFavoriteInStorage = favoritesFromStorage.some(favorite => favorite.id === character.id)
    setIsFavorite(isFavoriteInStorage)
  }, [character.id])

  return [isFavorite, setIsFavorite] as const
}

const CharacterCard: React.FC<CharacterProps> = ({ character }) => {
  const dispatch = useDispatch()
  const [isFavorite, setIsFavorite] = useFavorites(character)

  const favoriteIconClick = (event: React.MouseEvent) => {
    event.preventDefault()
    let favoritesFromStorage: Character[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (isFavorite) {
      dispatch(removeFromFavorites(character))
      favoritesFromStorage = favoritesFromStorage.filter(favorite => favorite.id !== character.id)
    } else {
      dispatch(addToFavorites(character))
      favoritesFromStorage.push(character)
    }
    localStorage.setItem('favorites', JSON.stringify(favoritesFromStorage))
    setIsFavorite(!isFavorite)
  }

  return (
    <Link to={`/characters/${character.id}`} className={styles.card}>
      <img src={character.image} alt={character.name} className={styles.cardImage} />
      <img
        src={isFavorite ? redFavoriteIcon : whiteFavoriteIcon}
        alt="favorite"
        onClick={favoriteIconClick}
        style={{ position: 'absolute', top: 10, right: 10 }}
        height={40}
        width={40}
      />
      <div className={styles.info}>
        <div>
          <h2>{character.name}</h2>
          <span className={styles[`status${character.status}`]}>{character.status}</span>
          <span> - </span>
          <span>{character.species}</span>
        </div>
        <RightArrow className={styles.arrow} />
      </div>
    </Link>
  )
}

export default CharacterCard