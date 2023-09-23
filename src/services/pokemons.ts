import pokemonApi from "../api";
import { PokemonTypes } from "../types";

export const fetchAndProcessPokemonTypes = async (): Promise<PokemonTypes> => {
  const pokemonTypes = await pokemonApi.getPokemonTypes();
  return pokemonTypes;
};

export const fetchPokemonsByType = async (type: string) => {
  const pokemons = await pokemonApi.getPokemonsByType(type);
  return pokemons;
};
