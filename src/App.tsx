import { useEffect, useState } from "react";
import "./App.css";
import {
  fetchAndProcessPokemonTypes,
  fetchPokemonsByType,
} from "./services/pokemons";

function App() {
  useEffect(() => {
    const fetchTypes = async () => {
      const types = await fetchAndProcessPokemonTypes();
      console.log("types", types[0]);
      const pokemons = await fetchPokemonsByType(types[0]);
      console.log("pokemons", pokemons);
    };
    fetchTypes();
  }, []);
  // const {
  //   pokemonTypes,
  //   setPokemonTypes,
  //   selectedType,
  //   setSelectedType,
  //   setPokemons,
  // } = usePokemonStore();

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/type")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const types = data.results.map((type: any) => type.name);
  //       setPokemonTypes(types);
  //     });
  // }, []);
  // useEffect(() => {
  //   if (selectedType) {
  //     fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("type", selectedType);

  //         console.log("data", data);
  //         setPokemons(data.pokemon.map((poke: any) => poke.pokemon));
  //       });
  //   }
  // }, [selectedType]);
  return (
    <div className="flex">
      {/* <Sidebar pokemonTypes={pokemonTypes} setSelectedType={setSelectedType} />
      <MainView /> */}
    </div>
  );
}

export default App;
