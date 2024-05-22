import React, { useEffect, useState } from 'react';
import { fetchMaterias } from '../../services/materiasServices'; // Importe o serviço

const Materias = () => {
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    const getMaterias = async () => {
      try {
        const data = await fetchMaterias();
        setMaterias(data);
      } catch (error) {
        console.error('Erro ao buscar as matérias:', error);
      }
    };

    getMaterias();
  }, []);

  useEffect(() => {
    console.log(materias);
  }, [materias]);
  
  return (
    <div>
      <h1>Lista de Matérias</h1>
      <ul>
        {materias.map((materia, index) => (
          <li key={index}>
            <p>ID: {materia.idMateria}</p>
            <p>Nome: {materia.nomeMateria}</p>
            <p>Topicos:</p>
            <ul>
              {materia.topicos.map((topico, idx) => (
                <li key={idx}>{topico}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Materias;
