import { RiAddFill } from "react-icons/ri";
import { Ship } from "../../interfaces/Ships.interface";



interface ShipCardProps {
  ship: Ship;
}

const ShipCard = ({ ship }: ShipCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 m-2 max-w-sm h-52 flex flex-col justify-center items-center">
      <h3 className="text-xl font-semibold text-gray-600 mb-2">{ship.name}</h3>
      <div className="text-gray-600 text-center">
        <p>
          <strong className="text-black font-bold">MODELO</strong>: {ship.model}
        </p>
        <p>
          <strong className="text-black font-bold">PASAJEROS</strong>: {ship.passengers}
        </p>
      </div>
      <button className="mt-2 px-4 py-2 bg-secondary hover:bg-yellow-500 text-primary rounded-md flex">
        Ver detalles <RiAddFill className='text-2xl' />
      </button>
    </div>
  );
};

export default ShipCard;
