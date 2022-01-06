import React, {useState, useEffect} from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import "./App.css";

function App() {

  const [pokeList, setPokeList] = useState([]) 
  const [pokeName, setPokeName] = useState("")
  
  //guarda as infos de todos os poke dentro de pokelist
  const guardarPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => setPokeList(res.data.results))
      .catch((err) => {console.log(err)})
  }

  //carrega todos os poke ao carregar a página
  useEffect (() => {
    guardarPokemons()
  }, [])

  //fazendo o valor de pokename ser o nome atráves do value
  const onChangePokeName = (e) => {
    setPokeName(e.target.value)
  }

  return (
    <div className="App">
      <select onChange={onChangePokeName}>
        <option value="">Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option value={pokemon.name} key={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
