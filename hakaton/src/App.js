import './App.css';
import {useEffect,useState} from 'react';
import MonCard from "./components/MonCard/MonCard"
import RegCard from "./components/RegCard/RegCard"
import data from "./data/data"

function App() {
  const [search, setSearch] = useState("");
  const [dispData, setDispData] = useState(data.Region);
  const [tags, setTags] = useState({
    eglise:false,
    muse:false,
    monum:false,
    st:false,
    ge:false,
    idf:false,
    br:false,
    pac:false
  });
  function tagfilter(tag) {
    tags[`${tag}`] = !tags[`${tag}`]
    setTags(tags)
    console.log(tags);
  }
  function textChange(value) {
    setSearch(value)
  }
  function filterForeTags(array) {
    let result = array
    for(let i in Object.keys(tags)){
      if(tags[i]===true){
        result = result.filter() 
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
        <button type='submit' onClick={()=>{tagfilter("st")}}>info</button>
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
        {dispData.filter((e)=>e.name.includes(search)).map((e)=><p key={e.id}>{e.name}</p>)}
      </div>
    </div>
  );
}

export default App;
