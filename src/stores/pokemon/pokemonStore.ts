import { create } from "zustand";

type State = {
  pokemonTypes: string[];
  selectedType: string | null;
  pokemons: any[];
};
type Actions = {
  setPokemonTypes: (pokemonTypes: string[]) => void;
  setSelectedType: (selectedType: string) => void;
  setPokemons: (pokemons: any[]) => void;
};

export const usePokemonStore = create<State & Actions>((set) => ({
  pokemonTypes: [],
  selectedType: null,
  pokemons: [],
  setPokemonTypes: (pokemonTypes) => set({ pokemonTypes }),
  setSelectedType: (selectedType) => set({ selectedType }),
  setPokemons: (pokemons) => set({ pokemons }),
}));
