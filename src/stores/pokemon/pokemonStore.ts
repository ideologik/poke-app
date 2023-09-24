import { create } from "zustand";
import { Pokemon, PokemonType } from "../../types";

type State = {
  pokemonTypes: PokemonType[];
  selectedType: string | null;
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
};

type Actions = {
  setPokemonTypes: (pokemonTypes: PokemonType[]) => void;
  setSelectedType: (selectedType: string) => void;
  setPokemons: (pokemons: Pokemon[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

export const usePokemonStore = create<State & Actions>((set) => ({
  pokemonTypes: [],
  selectedType: null,
  pokemons: [],
  loading: false,
  error: null,
  setPokemonTypes: (pokemonTypes) => set({ pokemonTypes }),
  setSelectedType: (selectedType) => set({ selectedType }),
  setPokemons: (pokemons) => set({ pokemons }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
