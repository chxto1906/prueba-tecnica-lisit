import { RiAddFill } from "react-icons/ri";
import { Person } from "../../interfaces/People.interface";

interface PersonCardProps {
  person: Person;
}

const PersonCard = ({ person }: PersonCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 m-2 max-w-sm h-52 flex flex-col justify-center items-center">
      <h3 className="text-2xl font-semibold text-gray-600 mb-2">{person.name}</h3>
      <div className="text-gray-600 text-center">
        <p><strong className="text-black font-bold">Altura:</strong> {person.height}</p>
        <p><strong className="text-black font-bold">Peso:</strong> {person.mass}</p>
        <p><strong className="text-black font-bold">Color de pelo:</strong> {person.hair_color}</p>
      </div>
      <button className="mt-2 px-4 py-2 bg-secondary hover:bg-yellow-500 text-primary rounded-md flex">
        Ver detalles <RiAddFill className='text-2xl' />
      </button>
    </div>
  );
};

export default PersonCard;
