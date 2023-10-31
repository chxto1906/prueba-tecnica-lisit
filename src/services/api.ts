import axios, { AxiosResponse, AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

interface ApiError {
    message: string;
  }
  
  // Función genérica para manejar errores de Axios
  const handleAxiosError = (error: AxiosError<ApiError>): void => {
    if (error.response) {
      // La solicitud se completó pero la respuesta contiene un error
      throw new Error(error.response.data.message);
    } else if (error.request) {
      // La solicitud no pudo completarse
      throw new Error('No se pudo completar la solicitud');
    } else {
      // Algo salió mal en la configuración de la solicitud
      throw new Error('Error en la configuración de la solicitud');
    }
  };
  
  export const getResourceList = async (resource: string, page: number = 1, search: string = ''): Promise<AxiosResponse | void> => {
    try {
      const response = await api.get(`${resource}/?page=${page}&search=${search}`);
      return response;
    } catch (error) {
      handleAxiosError(error as AxiosError<ApiError>);
    }
  };
  
  export const getResourceDetail = async (resource: string, id: number): Promise<AxiosResponse | void> => {
    try {
      const response = await api.get(`${resource}/${id}/`);
      return response;
    } catch (error) {
      handleAxiosError(error as AxiosError<ApiError>);
    }
  };