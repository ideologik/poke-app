import { FC } from "react";

interface Props {
  pokemonTypes: string[];
  setSelectedType: (type: string) => void;
}

const Sidebar: FC<Props> = ({ pokemonTypes, setSelectedType }) => {
  const handleChangeType = (type: any) => {
    setSelectedType(type);
  };
  return (
    <div className="flex flex-col gap-0">
      {pokemonTypes.map((type) => (
        <button
          key={type}
          className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded "
          onClick={() => handleChangeType(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};
export default Sidebar;
