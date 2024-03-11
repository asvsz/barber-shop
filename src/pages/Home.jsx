import { useState } from "react"
import Base from "../components/base"
import Modal from "../components/modal"
import ReserveCard from "../components/reserve-card"
import { IoMdAdd } from "react-icons/io";
import BoxCard from "../components/box-card"
import { useReservas } from "../hooks/utils"
import ReservationForm from "../components/reservation-form";
import ReserveDelete from "../components/reserve-delete";

function Home() {


  const [modalOpen, setModalOpen] = useState(false);
  const { reservas } = useReservas();

  //Filtra as reservas que estão concluídas 

  const reservasPendentes = reservas.filter(reserva => reserva.status == 'PENDENTE')

  return (
    <Base>
      <div className="flex flex-col">

        <div className="flex justify-between pt-5">
          <h1 className="font-semibold text-4xl">Reservas Pendentes</h1>
          <button className="flex items-center rounded-lg bg-blue-700 hover:bg-secondary
          justify-between p-2 gap-2 text-primary hover:text-quinary"
            onClick={() => setModalOpen(true)}>
            <IoMdAdd />
            Criar Reserva
          </button>

          {/* Renderizar o modal apenas quando modalOpen for true */}
          {modalOpen &&
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
              <div><ReservationForm /></div>
            </Modal>
          }
        </div>

        <BoxCard>
          {/*Checagem se existe reservas */}
          {reservasPendentes.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            reservasPendentes.map((reserva) => (
              <div className="justify-between mt-5 gap-5" key={reserva.id}>
                <ReserveCard>

                  <p className="w-1/5">
                    {new Date(...reserva.horario.horario).toLocaleDateString()} <br />
                    {new Date(...reserva.horario.horario).toLocaleTimeString()}
                  </p>
                  <p className="w-1/5">{reserva.nomeCliente}</p>
                  <p className="w-1/5">{reserva.telefoneCliente}</p>
                  <p className="w-1/5">
                    <select className="appearance-none row-start-1 col-start-1 bg-slate-50 ">
                      <option>{reserva.status}</option>
                    <option></option>
                  </select></p>

                  <ReserveDelete reserveId={reserva.id} />
                  
                </ReserveCard>
              </div>
            ))
          )}
        </BoxCard>
      </div>
    </Base>
  )
}

export default Home