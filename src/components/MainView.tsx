import { usePokemonStore } from "../stores/pokemon/pokemonStore";
import { loadAndSetPokemonsByType } from "../stores/pokemon/pokemonActions";
import { useEffect } from "react";
import PokemonCard from "./PokemonCard";
import logoPokemon from "../assets/poke.jpg";
const MainView = () => {
  console.log("render MainView");

  // la manera ideal de usar el store es la siguiente:
  const loading = usePokemonStore((state) => state.loading);
  const selectedType = usePokemonStore((state) => state.selectedType);
  const pokemons = usePokemonStore((state) => state.pokemons);
  useEffect(() => {
    //HACK: Averiguar por que se renderiza 3 veces el componente cuandos e presiona el boton de Sidebar
    console.log("selectedType changed:", selectedType);
    if (selectedType) {
      loadAndSetPokemonsByType(selectedType);
    }
  }, [selectedType]);

  if (!pokemons.length) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={logoPokemon} alt="Pokemon logo" className="mb-4" />
        <p className="text-xl font-semibold">Elija un tipo de Pokemon</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4">
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default MainView;
