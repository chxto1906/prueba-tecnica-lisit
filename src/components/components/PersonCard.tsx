import { Person } from "../../interfaces/People.interface";

interface PersonCardProps {
  person: Person;
}

const PersonCard = ({ person }: PersonCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 m-2 max-w-sm h-52 flex flex-col justify-center items-center">
      <h3 className="text-2xl font-semibold text-gray-600 mb-2">{person.name}</h3>
      <div className="text-gray-600 text-center">
        <p>Altura: {person.height} cm</p>
        <p>Peso: {person.mass} kg</p>
        <p>Color de pelo: {person.hair_color}</p>
      </div>
      <button className="mt-2 px-4 py-2 bg-secondary hover:bg-yellow-500 text-primary rounded-md">
        Ver detalles
      </button>
    </div>
  );
};

export default PersonCard;
