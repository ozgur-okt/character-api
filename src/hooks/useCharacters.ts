import { useState, useEffect } from 'react'
import { Character } from '../types/characters'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../redux/characters/actions'
import { AppDispatch, RootState } from '../redux/store'

const useCharacters = (id: string, selectedStatus: string | null) => {
  const useAppDispatch = () => useDispatch<AppDispatch>()
  const dispatch = useAppDispatch()

  const characters = useSelector((state: RootState) => state.characters.characters)
  //const [characters, setCharacters] = useState<Character[]>([])
  const [charactersByStatus, setCharactersByStatus] = useState<Character[]>([])

  useEffect(() => {
    // const fetchCharacters = async () => {
    //   const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
    //   const data = await response.json()
    //   const characterResponses = await Promise.all(
    //     data.residents.map((url: string) => fetch(url))
    //   )
    //   const characters = await Promise.all(
    //     characterResponses.map((response: Response) => response.json())
    //   )
     
    //   dispatch(setCharacters(characters))
    // }

    //fetchCharacters()
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