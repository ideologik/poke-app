import { LRUCache } from "lru-cache";
import {
  fetchAndProcessPokemonTypes,
  fetchPokemonsByType,
} from "../../services/pokemons";
import { usePokemonStore } from "./pokemonStore";
import { Pokemon, PokemonType } from "../../types";

const { setPokemonTypes, setSelectedType, setPokemons, setLoading, setError } =
  usePokemonStore.getState();

const options = { max: 21, maxAge: 1000 * 60 * 60 };
const cache = new LRUCache<string, PokemonType[] | Pokemon[]>(options);

const loadDataFromCache = async <T>(
  key: string,
  fetchFunction: () => Promise<T>,
  setFunction: (data: T) => void
): Promise<void> => {
  setLoading(true);
  try {
    if (cache.has(key)) {
      const cachedData = cache.get(key);
      if (Array.isArray(cachedData)) {
        setFunction(cachedData as unknown as T);
      }
    } else {
      const data = await fetchFunction();
      if (data) {
        setFunction(data);
        cache.set(key, data as PokemonType[] | Pokemon[]);
      }
    }
  } catch (error: any) {
    setError(error.message || "Unknown error");
  } finally {
    setLoading(false);
  }
};

export const loadAndSetPokemonTypes = (): void => {
  loadDataFromCache<PokemonType[]>(
    "pokemonTypes",
    fetchAndProcessPokemonTypes,
    setPokemonTypes
  );
};

export const loadAndSetPokemonsByType = (type: string): void => {
  loadDataFromCache<Pokemon[]>(
    `loadAndSetPokemonsByType_${type}`,
    () => fetchPokemonsByType(type),
    setPokemons
  );
};

export const selectPokemonType = (type: string): void => {
  setSelectedType(type);
};
