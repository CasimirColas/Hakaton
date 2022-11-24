import './App.css';
import {useEffect,useState} from 'react';
import MonCard from "./components/MonCard/MonCard"
import RegCard from "./components/RegCard/RegCard"

function App() {
  const [search, setSearch] = useState(undefined);
  function textChange(value) {
    setSearch(value)
  }
  return (
    <div className="App">
      <input type="search" onChange={(e)=>textChange(e.target.value)}/>
      <p>{search}</p>
    </div>
  );
}

export default App;
