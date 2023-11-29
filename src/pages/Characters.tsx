import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'
import useCharacters from '../hooks/useCharacters'
import styles from '../styles/pages/Characters.module.scss'
import Pagination from '../components/Pagination'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'


const Characters: React.FC = () => {

  const { id: idParam } = useParams<{ id?: string }>()
  const id = idParam || '1'
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const charactersPerPage = 3
  const currentCharacters = useSelector((state: RootState) => state.characters.currentCharacters)
  const isLoading = useSelector((state: RootState) => state.characters.loading)
  const { charactersByStatus } = useCharacters(id, selectedStatus)

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
              className={`${styles.unknown} ${selectedStatus === 'Unknown' ? styles.clicked : ''}`}
              onClick={() => selectedStatus === 'Unknown' ? setSelectedStatus(null) : setSelectedStatus('Unknown')}
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