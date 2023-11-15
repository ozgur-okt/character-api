import { useDispatch, useSelector } from "react-redux";
import TopBar from "./components/TopBar";
import { useEffect } from "react";
import { getCharacters, getLocations } from "./redux/actions/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(getCharacters())
  }, [dispatch]);


  let characters = useSelector((state: any) => state.data.characters);
  return (
    <>
       <TopBar />
    </>
  );
}

export default App;
