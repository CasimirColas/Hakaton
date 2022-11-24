import './App.css';
import {useEffect,useState} from 'react';
import MonCard from "./components/MonCard/MonCard"
import RegCard from "./components/RegCard/RegCard"
import data from "./data/data"

function App() {
  const defaultMonu = {
    eglise:false,
    musee:false,
    monument:false,
    st:false,}
  const defaultReg = {
    ge:false,
    idf:false,
    br:false,
    pac:false
  }
  const [search, setSearch] = useState("");
  const [dispData, setDispData] = useState(data.Region);
  const [monuTags, setMonuTags] = useState(defaultMonu);
  const [regTags, setRegTags] = useState(defaultReg);

  function tagfilterMonu(tag) {
    const def = defaultMonu
    def[`${tag}`] = !monuTags[`${tag}`]
    setMonuTags(def)
    console.log(filterForMonu(dispData.filter((e)=>e.name.includes(search))));
  }
  function textChange(value) {
    setSearch(value)
  }
  function filterForMonu(array) {
    let result = array
    for(let i in Object.keys(monuTags)){
      console.log(monuTags[`${Object.keys(monuTags)[i]}`]);
      if(monuTags[`${Object.keys(monuTags)[i]}`]===true){
        result = result.filter((e)=>e.categorie===Object.keys(monuTags)[i]) 
      }
    }
    return result
  }
  useEffect(() => {
    if(search==="" ){
      setDispData(data.Region)
    }else{
      setDispData(data.Region.concat(data.Touristique))
    }
  }, [search]);
  return (
    <div className="App">
      <div className='mainSpace'>
        <button type='submit' onClick={()=>{tagfilterMonu("eglise")}}>info</button>
      <h1>Question</h1>
      <img src='http://placekitten.com/200/300' alt='not loaded?'/>
      </div>
      <input type="text" onChange={(e)=>textChange(e.target.value)}/>
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
        {filterForMonu(dispData.filter((e)=>e.name.includes(search))).map((e)=><p key={e.id}>{e.name}</p>)}
      </div>
    </div>
  );
}

export default App;
