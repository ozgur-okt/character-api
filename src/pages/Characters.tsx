import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'
import useCharacters from '../utils/useCharacters'
import styles from '../styles/pages/Characters.module.scss'
import Pagination from '../components/Pagination'
import { useSelector } from 'react-redux'
import {  RootState } from '../redux/store'


const Characters: React.FC = () => {
 
  const { id: idParam } = useParams<{ id?: string }>()
  const id = idParam || '1'
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const charactersPerPage = 3
  const currentCharacters = useSelector((state: RootState) => state.characters.currentCharacters)
  const { charactersByStatus } = useCharacters(id, selectedStatus)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.status}>
          <h3>Filter by Status</h3>
          <div className={styles.buttons}>            
            <button className={styles.alive} onClick={() => setSelectedStatus('Alive')}>
              <span className={styles.circle}></span> Alive
            </button>
            <button className={styles.dead} onClick={() => setSelectedStatus('Dead')}>
              <span className={styles.circle}></span> Dead
            </button>
            <button className={styles.unknown} onClick={() => setSelectedStatus('Unknown')}>
              <span className={styles.circle}></span> Unknown
            </button>
          </div>
        </div>
        <Link className={styles.favLink} to="/favorites">Go to My Favorites</Link>
      </div>
     <div className={styles.characters}>
        {currentCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div> 
      <Pagination items={charactersByStatus} paginationFor='characters' itemsPerPage={charactersPerPage} />
    </div>
  )
}

export default Characters