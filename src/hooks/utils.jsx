// useReservas.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = "https://system-barbeshop-1a0a77e5c400.herokuapp.com"

const useReservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const getReservas = async () => {
      try {
        const response = await axios.get(`${url}/reservas`);
        setReservas(response.data);
      } catch (error) {
        console.log('Erro ao pegar os dados:', error);
      }
    }

    getReservas();
  }, []);

  return { reservas, setReservas };
}

//Cria uma nova barbearia
const useCreateBarbearia = (name) => {
  const [barbearia, setBarbearia] = useState([]);

  useEffect(() => {
    const createBarbearia = async () => {
      try {
        const response = await axios
        .post(`${url}/barbearias`, {
          nome: `${name}`
        })
        setBarbearia(response.data);
      } catch (e) {
        console.log('Erro ao criar barbearia:', e)
      }
    }

    createBarbearia();
  }, []);
  return {barbearia, setBarbearia}
}

//Busca as reservas de determinada barbearia
const useReservasByID = (id) => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const getReservas = async () => {
      try {
        const response = await axios.get(`${url}/reservas/${id}`)
        setReservas(response.data);
      } catch (error) {
        console.log("Erro ao obter reservas referente a barbearia: ", error)
      }
    }

    getReservas();
  }, [])
}

//Busca os horários de determinada barbearia
const useHorariosByID = (id) => {
  const [horarios, setHorarios] = useState([])

  useEffect(() => {
    const getHorarios = async () => {
      try {
        const response = await axios.get(`${url}/horarios/${id}`)
        setHorarios(response.data)
      } catch (error) {
        console.log("Erro ao obter os horários referente a barbearia: ", id)
      }
    }

    getHorarios();
  })
}

const useBarbearia = () => {
  const [barbearia, setBarbearia] = useState([]);

  useEffect(() => {
    const getBarbearia = async () => {
      try {
        const response = await axios.get(`${url}/barbearias`);
        setBarbearia(response.data);
      } catch (error) {
        console.log('Erro ao pegar os dados:', error);
      }
    }

    getBarbearia();
  }, []);

  return { barbearia, setBarbearia};
}

export { useReservas, useBarbearia, useCreateBarbearia, useHorariosByID, useReservasByID };
