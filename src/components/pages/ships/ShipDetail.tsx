import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getResourceDetail } from '../../../services/api';
import Loading from '../../components/Loading';
import { Ship } from '../../../interfaces/Ships.interface';

const ShipDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [ship, setShip] = useState<Ship | null>(null);

  useEffect(() => {
    getResourceDetail('starships',Number(id))
      .then((response) => {
        setShip(response?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!ship) {
    // Puedes mostrar un mensaje de carga o manejar el estado de carga de alguna otra manera
    return <Loading />;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 max-w-md mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-4">{ship.name}</h2>

      <div className="border p-4 shadow-md">
        <div className="text-xl font-semibold">Modelo:</div>
        <div className="text-xl">{ship.model}</div>
      </div>
      <div className="border p-4 shadow-md">
        <div className="text-xl font-semibold">Fabricante:</div>
        <div className="text-xl">{ship.manufacturer}</div>
      </div>
      <div className="border p-4 shadow-md mb-4">
        <div className="text-xl font-semibold">Costo en creditos:</div>
        <div className="text-xl">{ship.cost_in_credits}</div>
      </div>

      <div className="border p-4 shadow-md mb-4">
        <div className="text-xl font-semibold">Longitud:</div>
        <div className="text-xl">{ship.length}</div>
      </div>

      <div className="border p-4 shadow-md mb-4">
        <div className="text-xl font-semibold">Velocidad atmosférica máxima:</div>
        <div className="text-xl">{ship.max_atmosphering_speed}</div>
      </div>

      <div className="border p-4 shadow-md">
        <div className="text-xl font-semibold">Tripulacion:</div>
        <div className="text-xl">{ship.crew}</div>
      </div>

      <div className="border p-4 shadow-md">
        <div className="text-xl font-semibold">Pasajeros:</div>
        <div className="text-xl">{ship.passengers}</div>
      </div>

      <div className="border p-4 shadow-md">
        <div className="text-xl font-semibold">Capacidad de carga:</div>
        <div className="text-xl">{ship.passengers}</div>
      </div>
      
    </div>
  );
};

export default ShipDetail;
