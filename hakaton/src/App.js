import './App.css';
import { useEffect, useState } from 'react';
import MonCard from "./components/MonCard/MonCard"
import RegCard from "./components/RegCard/RegCard"

function App() {
  const [search, setSearch] = useState(undefined);
  function textChange(value) {
    setSearch(value)
  }
  return (

    <div><RegCard /></div>

  );
}

export default App;
