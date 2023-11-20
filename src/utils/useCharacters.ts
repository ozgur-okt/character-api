import { useState, useEffect } from 'react'
import { Character } from '../types/characters'

const useCharacters = (id: string, selectedStatus: string | null, currentPage: number, charactersPerPage: number) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
      const data = await response.json()
      const characterResponses = await Promise.all(
        data.residents.map((url: string) => fetch(url))
      )
      const characters = await Promise.all(
        characterResponses.map((response: Response) => response.json())
      )
      setCharacters(characters)
    }

    fetchCharacters()
  }, [id])

  useEffect(() => {
    const filtered = selectedStatus
      ? characters.filter(character => character.status === selectedStatus)
      : characters
    setFilteredCharacters(filtered)
  }, [characters, selectedStatus])

  const indexOfLastCharacter = currentPage * charactersPerPage
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
  const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter)

  return {currentCharacters, filteredCharacters}
}

export default useCharacters