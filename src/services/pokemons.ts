import pokemonApi from "../api";
import { PokemonType } from "../types";

export const fetchAndProcessPokemonTypes = async (): Promise<PokemonType[]> => {
  const pokemonTypes = await pokemonApi.getPokemonTypes();
  return pokemonTypes;
};

export const fetchPokemonsByType = async (type: string) => {
  const pokemons = await pokemonApi.getPokemonsByType(type);
  return pokemons;
};
