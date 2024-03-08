// useReservas.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useReservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const getReservas = async () => {
      try {
        const response = await axios.get('https://system-barbeshop-1a0a77e5c400.herokuapp.com/clientes');
        setReservas(response.data);
      } catch (error) {
        console.log('Erro ao pegar os dados:', error);
      }
    }

    getReservas();
  }, []);

  return { reservas, setReservas };
}

const useBarbearia = () => {
  const [barbearia, setBarbearia] = useState([]);

  useEffect(() => {
    const getBarbearia = async () => {
      try {
        const response = await axios.get('https://system-barbeshop-1a0a77e5c400.herokuapp.com/barbearias');
        setBarbearia(response.data);
      } catch (error) {
        console.log('Erro ao pegar os dados:', error);
      }
    }

    getBarbearia();
  }, []);

  return { barbearia, setBarbearia};
}

export { useReservas, useBarbearia };
