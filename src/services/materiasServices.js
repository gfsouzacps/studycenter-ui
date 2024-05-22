// src/services/materiasService.js
import api from '../utils/api'; // Importa o cliente de API personalizado

export const fetchMaterias = async () => {
  try {
    const response = await api.get('/Materias/GetMaterias');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar as matérias:', error);
    throw error;
  }
};
