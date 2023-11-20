import { useDispatch } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TopBar from "./components/TopBar"
import { useEffect } from "react"
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { fetchLocations } from './redux/locations/actions'
import Locations from "./pages/Locations"
import Characters from "./pages/Characters"
import CharacterDetails from "./pages/CharacterDetails"
import MyFavorites from "./pages/MyFavorites"

function App() {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch()

  useEffect(() => {
    dispatch(fetchLocations())
  }, [dispatch])

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Locations />} />
        <Route path="/locations/:id" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/favorites" element={<MyFavorites />} />
      </Routes>
    </Router>
  )
}

export default App
