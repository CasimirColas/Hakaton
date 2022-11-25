import './App.css';
import { useEffect, useState } from 'react';
import LCard from './components/LCard/LCard';
import data from "./data/data"

function App() {
  const defaultMonu = {
    eglise:false,
    musee:false,
    monument:false,
    "site naturel":false,}
  const defaultReg = {
    GrandEst:false,
    IleDeFrance:false,
    Bretagne:false,
    ProvenceAlpesCoteDazur:false
  }
  const fkeys ={
    GrandEst:1,
    IleDeFrance:2,
    Bretagne:3,
    ProvenceAlpesCoteDazur:4
  }
  const [search, setSearch] = useState("");
  const [monuTags, setMonuTags] = useState(defaultMonu);
  const [regTags, setRegTags] = useState(defaultReg);
  const [regList, setRegList] = useState(filterForMonu(filterForReg(data.Region.filter((e)=>e.name.includes(search)))).map((e)=><LCard key={e.id} id={e.id} nom={e.name} img={e.url} isReg={true}/>));
  const [monuList, setMonuList] = useState(filterForRegM(filterForMonu(data.Touristique.filter((e)=>e.name.includes(search)))).map((e)=><LCard key={e.id} id={e.id} nom={e.name} img={e.url} isReg={false}/>));

  function tagfilterMonu(tag) {
    const def = defaultMonu
    def[`${tag}`] = !monuTags[`${tag}`]
    setMonuTags(def)
  }
  function tagfilterReg(tag) {
    const def = defaultReg
    def[`${tag}`] = !regTags[`${tag}`]
    setRegTags(def)
  }
  function textChange(value) {
    setSearch(value)
  }
  function filterForMonu(array) {
    let result = array
    for(let i in Object.keys(monuTags)){
      if(monuTags[`${Object.keys(monuTags)[i]}`]===true){
        result = result.filter((e)=>e.categorie===Object.keys(monuTags)[i]) 
      }
    }
    return result
  }
  function filterForRegM(array) {
    let result = array
    for(let i in Object.keys(regTags)){
      if(regTags[`${Object.keys(regTags)[i]}`]===true){
        result = result.filter((e)=>e.id_Region===fkeys[`${Object.keys(regTags)[i]}`]) 
      }
    }
    return result
  }
  function filterForReg(array) {
    let result = array
    for(let i in Object.keys(regTags)){
      if(regTags[`${Object.keys(regTags)[i]}`]===true){
        result = result.filter((e)=>e.id===fkeys[`${Object.keys(regTags)[i]}`]) 
      }
    }
    return result
  }
  useEffect(() => {
    setRegList(filterForMonu(filterForReg(data.Region.filter((e)=>e.name.includes(search)))).map((e)=><LCard key={e.id} id={e.id} nom={e.name} img={e.url} isReg={true}/>))
    setMonuList(filterForRegM(filterForMonu(data.Touristique.filter((e)=>e.name.includes(search)))).map((e)=><LCard key={e.id} id={e.id} nom={e.name} img={e.url} isReg={false}/>))
  }, [monuTags,regTags]);
  return (
    <div className="top-container">
      <h1 className="title-homepage">Quelle region voulez-vous découvrir ?</h1>
      <div className="element-top-container">
          <div className="search-input">
            <input className="filter-button" type="text" onChange={(e)=>textChange(e.target.value)}/>
            <div className="checkboxs-chimique">
                <form>
                    <h3>Nos types de monuments</h3>
                    <input type="checkbox" checked={monuTags.eglise} onChange={()=>{tagfilterMonu("eglise")}}/>
                    <label>Eglise</label><br/>
                    <input type="checkbox" checked={monuTags.musee} onChange={()=>{tagfilterMonu("musee")}}/>
                    <label>Musee</label><br/>
                    <input type="checkbox" checked={monuTags.monument}  onChange={()=>{tagfilterMonu("monument")}}/>
                    <label>Monument</label><br/>
                    <input type="checkbox" checked={monuTags['site naturel']}  onChange={()=>{tagfilterMonu("site naturel")}}/>
                    <label>Site naturel</label><br/>
                </form>
                <form>
                    <h3>Nos regions</h3>
                    <input type="checkbox" checked={regTags.GrandEst} onChange={()=>{tagfilterReg("GrandEst")}}/>
                    <label>Grand-Est</label><br/>
                    <input type="checkbox" checked={regTags.IleDeFrance} onChange={()=>{tagfilterReg("IleDeFrance")}}/>
                    <label>Iles-de-France</label><br/>
                    <input type="checkbox" checked={regTags.Bretagne} onChange={()=>{tagfilterReg("Bretagne")}}/>
                    <label>Bretagne</label><br/>
                    <input type="checkbox" checked={regTags.ProvenceAlpesCoteDazur} onChange={()=>{tagfilterReg("ProvenceAlpesCoteDazur")}}/>
                    <label>Provence</label><br/>
                </form>
            </div>
          </div>
          <h2 className="suggestions-title">Nos Suggestions</h2>
        </div>
        <div className="suggestions-container">
      <div className='region-img-container'>
      {regList}
        {monuList}
      </div>
      </div>
    </div>
  );
}

export default App;
