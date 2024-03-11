import { useState } from "react";
import Base from "../components/base"
import BoxCard from "../components/box-card"
import ReserveCard from "../components/reserve-card"
import ReserveDelete from "../components/reserve-delete";
import { useReservas } from "../hooks/utils"
import axios from "axios";

function History() {

  const { reservas } = useReservas();

  //Filtra as reservas que estão concluídas 
  const reservasConcluidas = reservas.filter(reserva => reserva.status == 'CONFIRMADO')


  const [novoStatus, setNovoStatus] = useState('')

  const handleChangeStatus = async (reservaId, e) => {
    
    const novoStatusSelecionado = e.target.value;

    try {

      await axios.put(`https://system-barbeshop-1a0a77e5c400.herokuapp.com/reservas/${reservaId}`, {
        status: novoStatusSelecionado
      })
      
      //Atualiza o estado local após a reposta do servidor
      setNovoStatus(novoStatusSelecionado)
      console.log('Status atualizado')

    } catch (error) {

      console.error('Erro ao atualizar status', error)
    }
  }

  return (
    <Base>
      <BoxCard>
        {/*Checagem se existe reservas */}
        {reservasConcluidas.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          reservasConcluidas.map((reserva) => (
            <div className="justify-between mt-5 gap-5" key={reserva.id}>
              <ReserveCard>

                <p className="w-1/5">
                  {new Date(...reserva.horario.horario).toLocaleDateString()} <br />
                  {new Date(...reserva.horario.horario).toLocaleTimeString()}
                </p>
                <p className="w-1/5">{reserva.nomeCliente}</p>
                <p className="w-1/5">{reserva.telefoneCliente}</p>
                <p className="w-1/5">
                  CONFIRMADO
                </p>

                <ReserveDelete reserveId={reserva.id}/>

              </ReserveCard>
            </div>
          ))
        )}
      </BoxCard>
    </Base>
  )
}

export default History