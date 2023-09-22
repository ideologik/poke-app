import { produce } from "immer";
import { useState, useEffect } from "react";

const InmutablePoke = () => {
  const initState: any = {
    name: "Charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    attributes: {
      life: 100,
      attack: 50,
      defense: 30,
    },
  };
  const [pokemon, setPokemon] = useState<any>(initState);

  useEffect(() => {
    console.log("pokemon entró"); // 100
  }, [pokemon]);

  const handleChangeLife = () => {
    // pokemon.attributes.life = 50;
    // setPokemon((pokemonPrev: any) => {
    //   return {
    //     ...pokemonPrev,
    //     attributes: {
    //       ...pokemonPrev.attributes,
    //       life: 50,
    //     },
    //   };
    // });
    // setPokemon((draf: any) => {
    //   draf.attributes.life = 50;
    // });

    setPokemon(
      produce((draf: any) => {
        draf.attributes.life = 50;
      })
    );

    console.log("pokemon cambió"); // 50
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-image">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div className="card-content">
            <h3>{pokemon.name}</h3>
            <ul>
              <li>
                <strong>Life:</strong> {pokemon.attributes.life}
              </li>
              <li>
                <strong>Attack:</strong> {pokemon.attributes.attack}
              </li>
              <li>
                <strong>Defense:</strong> {pokemon.attributes.defense}
              </li>
            </ul>
            <button className="btn btn-primary" onClick={handleChangeLife}>
              cambiar valor vida
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InmutablePoke;
