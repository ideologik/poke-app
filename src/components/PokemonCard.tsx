import { FC, useState } from "react";
import { Pokemon } from "../types";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className="rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        className="w-full"
        src={isHovered ? pokemon.imageShiny : pokemon.image}
        alt={pokemon.name}
      />
      <div className="px-6 py-4">
        <div className="text-center font-bold text-xl mb-2">{pokemon.name}</div>
      </div>
    </div>
  );
};

export default PokemonCard;
