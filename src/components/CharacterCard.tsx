import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Character, CharacterProps } from '../types/characters'
import whiteFavoriteIcon from '../assets/white-favorite.svg'
import redFavoriteIcon from '../assets/red-favorite.svg'
import { ReactComponent as RighArrow } from '../assets/arrow-right.svg'
import styles from '../styles/components/CharacterCard.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { addToFavorites, removeFromFavorites } from '../redux/favorites/actions'

const CharacterCard: React.FC<CharacterProps> = ({ character }) => {
  const dispatch = useDispatch()
  const favorites: Character[] = useSelector((state: RootState) => state.favorites.favorites)
  const isFavorite = favorites.some(favorite => favorite.id === character.id)
  const [isFavoriteClicked, setFavoriteClicked] = useState(isFavorite)

  useEffect(() => {
    const favoritesFromStorage: Character[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    const isFavoriteInStorage = favoritesFromStorage.some((favorite: Character) => favorite.id === character.id)
    setFavoriteClicked(isFavoriteInStorage)
  }, [character.id])

  const favoriteIconClick = (event: React.MouseEvent) => {
    event.preventDefault()
    let favoritesFromStorage: Character[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (isFavoriteClicked) {
      dispatch(removeFromFavorites(character))
      favoritesFromStorage = favoritesFromStorage.filter((favorite: Character) => favorite.id !== character.id)
    } else {
      dispatch(addToFavorites(character))
      favoritesFromStorage.push(character)
    }
    localStorage.setItem('favorites', JSON.stringify(favoritesFromStorage))
    setFavoriteClicked(!isFavoriteClicked)
  }

  return (
    <Link to={`/characters/${character.id}`} className={styles.card}>
      <img src={character.image} alt={character.name} className={styles.cardImage} />
      <img
        src={isFavoriteClicked ? redFavoriteIcon : whiteFavoriteIcon}
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
        <RighArrow className={styles.arrow} />
      </div>
    </Link>
  )
}

export default CharacterCard