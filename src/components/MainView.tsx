import { usePokemonStore } from "../stores/pokemon/pokemonStore";
const MainView = () => {
  const { pokemons } = usePokemonStore();
  return (
    <>
      <h1>Main</h1>
      {JSON.stringify(pokemons, null, 2)}
    </>
  );
};

export default MainView;
