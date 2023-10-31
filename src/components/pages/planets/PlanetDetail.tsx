import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getResourceDetail } from '../../../services/api';
import Loading from '../../components/Loading';
import { Planet } from '../../../interfaces/Planets.interface';
import { extractIdFromURL } from '../../../utils/utils';

const PlanetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [planet, setPlanet] = useState<Planet | null>(null);

  useEffect(() => {
    getResourceDetail('planets',Number(id))
      .then((response) => {
        setPlanet(response?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!planet) {
    // Puedes mostrar un mensaje de carga o manejar el estado de carga de alguna otra manera
    return <Loading />;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 w-full flex flex-col md:flex-row">
      <div className="w-full md:w-5/6 pr-0 md:pr-8">
        <h2 className="text-4xl font-semibold text-center mb-4">{planet.name}</h2>

            <div className="border p-4 shadow-md">
                <div className="text-xl font-semibold">Periodo de rotacion:</div>
                <div className="text-xl">{planet.rotation_period}</div>
            </div>
            <div className="border p-4 shadow-md">
                <div className="text-xl font-semibold">Periodo orbital:</div>
                <div className="text-xl">{planet.orbital_period}</div>
            </div>
            <div className="border p-4 shadow-md mb-4">
                <div className="text-xl font-semibold">Diametro:</div>
                <div className="text-xl">{planet.diameter}</div>
            </div>

            <div className="border p-4 shadow-md mb-4">
                <div className="text-xl font-semibold">Clima:</div>
                <div className="text-xl">{planet.climate}</div>
            </div>

            <div className="border p-4 shadow-md mb-4">
                <div className="text-xl font-semibold">Gravedad:</div>
                <div className="text-xl">{planet.gravity}</div>
            </div>

            <div className="border p-4 shadow-md">
                <div className="text-xl font-semibold">Terreno:</div>
                <div className="text-xl">{planet.terrain}</div>
            </div>

            <div className="border p-4 shadow-md">
                <div className="text-xl font-semibold">Superficie del agua:</div>
                <div className="text-xl">{planet.surface_water}</div>
            </div>

            <div className="border p-4 shadow-md">
                <div className="text-xl font-semibold">Poblacion:</div>
                <div className="text-xl">{planet.population}</div>
            </div>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8 mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Residentes</h2>
            <ul className="mt-4 space-y-2">
                {planet.residents.map((residentURL, index) => (
                    <li
                    key={index}
                    className="border p-4 rounded-md shadow-md bg-white hover:bg-gray-100"
                    >
                    <Link
                        to={`/people/${extractIdFromURL(residentURL)}`}
                        className="text-blue-500 hover:underline"
                    >
                        Ver detalles del residente {extractIdFromURL(residentURL)}
                    </Link>
                    </li>
                ))}
            </ul>
      </div>
    </div>
  );
};

export default PlanetDetail;
