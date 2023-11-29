import { useState, useEffect } from 'react'
import { Character } from '../types/characters'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../redux/characters/actions'
import { AppDispatch, RootState } from '../redux/store'

const useCharacters = (id: string, selectedStatus: string | null) => {
  const useAppDispatch = () => useDispatch<AppDispatch>()
  const dispatch = useAppDispatch()

  const characters = useSelector((state: RootState) => state.characters.characters)
  const [charactersByStatus, setCharactersByStatus] = useState<Character[]>([])

  useEffect(() => {
    if (id) dispatch(fetchCharacters(id))
  }, [dispatch, id])

  useEffect(() => {
    const filtered = selectedStatus
      ? characters.filter(character => character.status === selectedStatus)
      : characters
    setCharactersByStatus(filtered)
  }, [characters, selectedStatus])

  return { charactersByStatus}
}

export default useCharacters