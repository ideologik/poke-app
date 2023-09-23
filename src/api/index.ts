import axios, { AxiosResponse } from "axios";
import { Pokemon, PokemonTypes } from "../types";
interface PokemonAPI {
  getPokemonTypes: () => Promise<any>;
  getPokemonsByType: (type: string) => Promise<any>;
}

const pokemonApi: PokemonAPI = {
  // devuelve un array de strings con los tipos de pokemon
  getPokemonTypes: async (): Promise<PokemonTypes> => {
    const allTypes: any = await fetchAllTypes("https://pokeapi.co/api/v2/type");
    console.log("allTypes", allTypes);
    return allTypes.results.map((type: any) => type.name);
  },
  // devuelve un array de objetos con los pokemons del tipo especificado
  getPokemonsByType: async (type: string): Promise<Pokemon[]> => {
    const response: any = await axios.get(
      `https://pokeapi.co/api/v2/type/${type}`
    );
    console.log("data!", response.data);
    const pokemons: Pokemon[] = response.data.pokemon.map((item: any) => ({
      name: item.pokemon.name,
      url: item.pokemon.url,
    }));

    return pokemons;
  },
};

async function fetchAllTypes(
  url: string,
  accumulatedResults: any[] = []
): Promise<any> {
  const { data }: AxiosResponse<any> = await axios.get(url);
  console.log("data", data);
  // Acumula los resultados
  const allResults = [...accumulatedResults, ...data.results];

  if (data.next) {
    // Si hay más páginas, realiza una nueva petición recursiva
    return fetchAllTypes(data.next, allResults);
  } else {
    // Si no hay más páginas, retorna el objeto final
    return {
      count: allResults.length,
      next: null,
      previous: null,
      results: allResults,
    };
  }
}

export default pokemonApi;
