import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getResourceDetail } from '../../../services/api';
import { Person } from '../../../interfaces/People.interface';
import Loading from '../../components/Loading';

const PersonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    getResourceDetail('people',Number(id))
      .then((response) => {
        setPerson(response?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!person) {
    // Puedes mostrar un mensaje de carga o manejar el estado de carga de alguna otra manera
    return <Loading />;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 max-w-md mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-4">{person.name}</h2>

      <div className="border p-4 shadow-md mb-4">
        <div className="text-xl font-semibold">Altura:</div>
        <div className="text-xl">{person.height} cm</div>
      </div>

      <div className="border p-4 shadow-md mb-4">
        <div className="text-xl font-semibold">Peso:</div>
        <div className="text-xl">{person.mass} kg</div>
      </div>

      <div className="border p-4 shadow-md mb-4">
        <div className="text-xl font-semibold">Color de pelo:</div>
        <div className="text-xl">{person.hair_color}</div>
      </div>

      <div className="border p-4 shadow-md">
        <div className="text-xl font-semibold">Color de piel:</div>
        <div className="text-xl">{person.skin_color}</div>
      </div>

      <div className="border p-4 shadow-md">
        <div className="text-xl font-semibold">Color de ojos:</div>
        <div className="text-xl">{person.eye_color}</div>
      </div>

      <div className="border p-4 shadow-md">
        <div className="text-xl font-semibold">Cumpleanos:</div>
        <div className="text-xl">{person.birth_year}</div>
      </div>
      <div className="border p-4 shadow-md">
        <div className="text-xl font-semibold">Genero:</div>
        <div className="text-xl">{person.gender}</div>
      </div>
    </div>
  );
};

export default PersonDetail;
