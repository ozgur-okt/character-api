import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'
import useCharacters from '../utils/useCharacters'

const Characters: React.FC = () => {
  const { id: idParam } = useParams<{ id?: string }>()
  const id = idParam || '1'
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const charactersPerPage = 3

  const {currentCharacters, filteredCharacters} = useCharacters(id, selectedStatus, currentPage, charactersPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div>
      <button onClick={() => setSelectedStatus('Alive')}>Alive</button>
      <button onClick={() => setSelectedStatus('Dead')}>Dead</button>
      <button onClick={() => setSelectedStatus('Unknown')}>Unknown</button>
      <Link to="/favorites">Go to My Favorites</Link>
      {currentCharacters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {Array(Math.ceil(filteredCharacters.length / charactersPerPage)).fill(null).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Characters