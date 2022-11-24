import './App.css';
import {useEffect,useState} from 'react';
import MonCard from "./components/MonCard/MonCard"
import RegCard from "./components/RegCard/RegCard"
import data from "./data/data"

function App() {
  const [search, setSearch] = useState(undefined);
  const [dispData, setDispData] = useState(data[0]);
  function tagfilter(params) {
    
  }
  function textChange(value) {
    setSearch(value)
  }
  return (
    <div className="App">
      <div className='mainSpace'>
      <h1>Question</h1>
      <img src='http://placekitten.com/200/300' alt='not loaded?'/>
      </div>
      <input type="search" onChange={(e)=>textChange(e.target.value)}/>
      <div className='selector'>
        <div className='selMonu'>
          <button type='submit'>O</button>
          <p>Eglise</p>
        </div>
        <div className='selReg'>
        <button type='submit'>O</button>
          <p>une region</p>
        </div>
      </div>
      <div className='displayedLCards'>
        {dispData}
      </div>
    </div>
  );
}

export default App;
