import { LRUCache } from "lru-cache";

import {
  fetchAndProcessPokemonTypes,
  fetchPokemonsByType,
} from "../../services/pokemons";
import { usePokemonStore } from "./pokemonStore";

const { setPokemonTypes, setSelectedType, setPokemons, setLoading, setError } =
  usePokemonStore.getState();
const options = { max: 3000, maxAge: 1000 * 60 * 60 };
const cache = new LRUCache(options);

export const loadAndSetPokemonTypes = async () => {
  setLoading(true);
  try {
    if (cache.has("pokemonTypes")) {
      const cachedTypes = cache.get("pokemonTypes");
      if (Array.isArray(cachedTypes)) {
        setPokemonTypes(cachedTypes);
      }
    } else {
      const types = await fetchAndProcessPokemonTypes();
      setPokemonTypes(types);
      cache.set("pokemonTypes", types);
    }
  } catch (error: any) {
    setError(error.message || "Unknown error");
  } finally {
    setLoading(false);
  }
};

export const loadAndSetPokemonsByType = async (type: string) => {
  setLoading(true);
  try {
    if (cache.has(`loadAndSetPokemonsByType_${type}`)) {
      const cachedPokemons = cache.get(`loadAndSetPokemonsByType_${type}`);
      if (Array.isArray(cachedPokemons)) {
        setPokemons(cachedPokemons);
      }
    } else {
      const pokemons = await fetchPokemonsByType(type);
      setPokemons(pokemons);
      cache.set(`loadAndSetPokemonsByType_${type}`, pokemons);
    }
  } catch (error: any) {
    setError(error.message || "Unknown error");
  } finally {
    setLoading(false);
  }
};

export const selectPokemonType = (type: string) => {
  setSelectedType(type);
};
