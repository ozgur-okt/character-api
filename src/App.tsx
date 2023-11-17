import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from "./components/TopBar";
import { useEffect } from "react";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchLocations } from './redux/locations/actions';
import Locations from "./pages/Locations";
import Characters from "./pages/Characters";
import CharacterDetails from "./pages/CharacterDetails";

function App() {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Locations />} />
        <Route path="/locations/:id" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
