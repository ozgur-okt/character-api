import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'
import useCharacters from '../utils/useCharacters'
import styles from '../styles/Characters.module.scss'
import rightArrow from '../assets/right-arrow.svg'
import leftArrow from '../assets/left-arrow.svg'

const Characters: React.FC = () => {
  const { id: idParam } = useParams<{ id?: string }>()
  const id = idParam || '1'
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const charactersPerPage = 3

  const { currentCharacters, filteredCharacters } = useCharacters(id, selectedStatus, currentPage, charactersPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);

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
        <Link to="/favorites">Go to My Favorites</Link>
      </div>
      {/* <div className={styles.characters}>
        {currentCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div> */}

      <div className={styles.pagination}>
        <button className={styles.previous} onClick={prevPage} disabled={currentPage === 1}><img src={leftArrow}/></button>
        {currentPage > 2 && <button className={styles.pageNumber} onClick={() => paginate(1)}>1</button>}
        {currentPage > 3 && <span>...</span>}
        {currentPage > 1 && <button className={styles.pageNumber} onClick={() => paginate(currentPage - 1)}>{currentPage - 1}</button>}
        <button className={styles.currentPageNumber}>{currentPage}</button>
        {currentPage < totalPages && <button className={styles.pageNumber} onClick={() => paginate(currentPage + 1)}>{currentPage + 1}</button>}
        {currentPage < totalPages - 2 && <span>...</span>}
        {currentPage < totalPages - 1 && <button className={styles.pageNumber} onClick={() => paginate(totalPages)}>{totalPages}</button>}
        <button className={styles.next} onClick={nextPage} disabled={currentPage === totalPages}><img src={rightArrow}/></button>
      </div>
    </div>
  )
}

export default Characters