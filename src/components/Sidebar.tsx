import { useEffect } from "react";
import { usePokemonStore } from "../stores/pokemon/pokemonStore";
import {
  loadAndSetPokemonTypes,
  selectPokemonType,
} from "../stores/pokemon/pokemonActions";

const Sidebar = () => {
  console.log("render Sidebar");
  // Si se usa así cualquier cambio que se produzca en el store
  // hará que se vuelva a renderizar el componente. No solo cuando
  // cambie el valor de pokemonTypes o loading. Si cambia cualquier
  // valor del store, se volverá a renderizar el componente.
  // const {loading, pokemonTypes} = usePokemonStore();

  // la manera ideal de usar el store es la siguiente:
  const pokemonTypes = usePokemonStore((state) => state.pokemonTypes);

  useEffect(() => {
    loadAndSetPokemonTypes();
  }, []);

  const handleChangeType = (type: string) => {
    selectPokemonType(type);
  };

  return (
    <div className="h-screen p-4">
      <h2 className="text-2xl mb-4 font-semibold text-center">Pokemon Types</h2>
      <div className="flex flex-col items-center gap-4">
        {pokemonTypes.map((type) => (
          <button
            key={type}
            className="text-blue-500 font-bold border-4 border-blue-500 bg-yellow-400 hover:bg-yellow-500 focus:ring focus:outline-none w-full text-center py-2 px-4 rounded shadow-lg"
            onClick={() => handleChangeType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
