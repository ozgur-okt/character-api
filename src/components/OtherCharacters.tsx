import { Link } from 'react-router-dom'
import { Character, OtherCharactersProps } from '../types/characters'
import styles from '../styles/components/OtherCharacters.module.scss'

const OtherCharacter: React.FC<{ character: Character }> = ({ character }) => (
  <Link key={character.id} to={`/characters/${character.id}`} className={styles.character}>
    <img src={character.image} alt={character.name} className={styles.characterImage} />
    <div className={styles.info}>
      <h2>{character.name}</h2>
      <p className={styles.location}>{character.location.name}</p>
      <p>{character.gender}</p>
    </div>
  </Link>
)

const OtherCharacters: React.FC<OtherCharactersProps> = ({ characters }) => {
  return (
    <div className={styles.otherCharacters}>
      <h2>Other Characters</h2>
      {characters.length > 0 ?
        characters.map((character) => <OtherCharacter key={character.id} character={character} />)
        : <p>No other characters found with the same location and status</p>
      }
    </div>
  )
}

export default OtherCharacters