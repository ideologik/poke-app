import { useEffect, useState } from "react";
import "./App.css";
import MainView from "./components/MainView";
import Sidebar from "./components/Sidebar";
import { usePokemonStore } from "./stores/pokemon/pokemonStore";

function App() {
  const {
    pokemonTypes,
    setPokemonTypes,
    selectedType,
    setSelectedType,
    setPokemons,
  } = usePokemonStore();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((data) => {
        const types = data.results.map((type: any) => type.name);
        setPokemonTypes(types);
      });
  }, []);
  useEffect(() => {
    if (selectedType) {
      fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("type", selectedType);

          console.log("data", data);
          setPokemons(data.pokemon.map((poke: any) => poke.pokemon));
        });
    }
  }, [selectedType]);
  return (
    <div className="flex">
      <Sidebar pokemonTypes={pokemonTypes} setSelectedType={setSelectedType} />
      <MainView />
    </div>
  );
}

export default App;
