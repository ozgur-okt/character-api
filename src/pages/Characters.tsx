import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'
import styles from '../styles/pages/Characters.module.scss'
import Pagination from '../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { fetchCharacters } from '../redux/characters/actions'
import { Character } from '../types/characters'


const Characters: React.FC = () => {

  const useAppDispatch = () => useDispatch<AppDispatch>()
  const dispatch = useAppDispatch()

  const { id: idParam } = useParams<{ id?: string }>()
  const id = idParam || '1'

  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [charactersByStatus, setCharactersByStatus] = useState<Character[]>([])
  
  const characters = useSelector((state: RootState) => state.characters.characters)
  const currentCharacters = useSelector((state: RootState) => state.characters.currentCharacters)
  const isLoading = useSelector((state: RootState) => state.characters.loading)
  //const { charactersByStatus } = useCharacters(id, selectedStatus)
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
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titles}>
          <h2>Filter by Status</h2>
          <Link className={styles.favLink} to="/favorites">Go to My Favorites</Link>
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttons}>
            <button
              className={`${styles.alive} ${selectedStatus === 'Alive' ? styles.clicked : ''}`}
              onClick={() => selectedStatus === 'Alive' ? setSelectedStatus(null) : setSelectedStatus('Alive')}
            >
              <span className={styles.circle}></span> Alive
            </button>
            <button
              className={`${styles.dead} ${selectedStatus === 'Dead' ? styles.clicked : ''}`}
              onClick={() => selectedStatus === 'Dead' ? setSelectedStatus(null) : setSelectedStatus('Dead')}
            >
              <span className={styles.circle}></span> Dead
            </button>
            <button
              className={`${styles.unknown} ${selectedStatus === 'unknown' ? styles.clicked : ''}`}
              onClick={() => selectedStatus === 'unknown' ? setSelectedStatus(null) : setSelectedStatus('unknown')}
            >
              <span className={styles.circle}></span> Unknown
            </button>

            {/* {selectedStatus && (
                <button className={styles.clear} onClick={() => setSelectedStatus(null)}>
                  <span className={styles.circle}></span> Clear
                </button>
              )} */}

          </div>
        </div>
      </div>
      <div className={styles.charactersContainer}>
        <div className={styles.characters}>
          {currentCharacters.length > 0 ?
            currentCharacters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))
            : <div className={styles.noCharacters}>No characters found</div>}
        </div>
      </div>
      <Pagination items={charactersByStatus} paginationFor='characters' itemsPerPage={charactersPerPage} />
    </div>
  )
}

export default Characters