import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../redux/characters/actions'
import { AppDispatch, RootState } from '../redux/store'
import { Character } from '../types/characters'
import CharacterCard from '../components/CharacterCard'
import Pagination from '../components/Pagination'
import styles from '../styles/pages/Characters.module.scss'

const Characters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { id: idParam } = useParams<{ id?: string }>()
  const id = idParam || '1'

  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [charactersByStatus, setCharactersByStatus] = useState<Character[]>([])

  const characters = useSelector((state: RootState) => state.characters.characters)
  const currentCharacters = useSelector((state: RootState) => state.characters.currentCharacters)
  const isLoading = useSelector((state: RootState) => state.characters.loading)

  const charactersPerPage = 3

  useEffect(() => {
    if (id) dispatch(fetchCharacters(id))
  }, [dispatch, id])

  useEffect(() => {
    const filtered = selectedStatus
      ? characters.filter(character => character.status === selectedStatus)
      : characters
    setCharactersByStatus(filtered)
  }, [characters, selectedStatus])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const statusButtons = ['Alive', 'Dead', 'unknown'].map(status => (
    <button
      key={status}
      className={`${styles[status.toLowerCase()]} ${selectedStatus === status ? styles.clicked : ''}`}
      onClick={() => selectedStatus === status ? setSelectedStatus(null) : setSelectedStatus(status)}
    >
      <span className={styles.circle}></span> {status.charAt(0).toUpperCase() + status.slice(1)}
    </button>
  ))

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titles}>
          <h2>Filter by Status</h2>
          <Link className={styles.favLink} to="/favorites">Go to My Favorites</Link>
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttons}>
            {statusButtons}
          </div>
        </div>
      </div>
      <div className={styles.charactersContainer}>
        <div className={styles.characters}>
          {currentCharacters.length > 0
            ? currentCharacters.map(character => <CharacterCard key={character.id} character={character} />)
            : <div className={styles.noCharacters}>No characters found</div>
          }
        </div>
      </div>
      <Pagination items={charactersByStatus} paginationFor='characters' itemsPerPage={charactersPerPage} resetPagination={selectedStatus !== null} />
    </div>
  )
}

export default Characters