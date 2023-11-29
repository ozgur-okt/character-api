import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Character } from '../types/characters'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import OtherCharacters from '../components/OtherCharacters'
import styles from '../styles/pages/CharacterDetails.module.scss'

const CharacterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const characters = useSelector((state: RootState) => state.characters.characters)
  const character = characters.find((character: Character) => character.id === Number(id))
  
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (character) {
      setIsLoading(false)
    }
  }, [character])

  const otherCharacters = characters.filter((otherCharacter: Character) => 
    otherCharacter.id !== Number(id) &&
    otherCharacter.location.name === character?.location.name &&
    otherCharacter.status === character?.status
  )

  if (isLoading) {
    return <div>Loading...</div>
  }
  
  return (
    <div className={styles.container}>
      {character && (
        <div className={styles.character}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <div className={styles.info}>
            <div className={styles.status}>
              <span className={styles[`status${character.status}`]}>{character.status}</span>
              <span> - </span>
              <span>{character.species}</span>
            </div>
            <span className={styles.gender}><i>{character.gender}</i></span>
          </div>
          <span className={styles.location}><i>{character.location.name}</i></span>
        </div>
      )}
      <OtherCharacters characters={otherCharacters} />
    </div>
  )
}

export default CharacterDetails