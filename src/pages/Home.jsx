import axios from "axios"
import { useEffect, useState } from "react"
import Base from "../components/base"
import Modal from "../components/modal"
import ReserveCard from "../components/reserve-card"

function Home() {

  const [reservas, setReservas] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {

    const getReservas = async () => {

      try {
        const response = await axios.get('https://system-barbeshop-1a0a77e5c400.herokuapp.com/barbearias')

        setReservas(response.data)

      } catch (error) {
        console.log('Error ao pegar os dados:', error)
      }
    }

    getReservas()
  }, [])

  return (
    <Base>
      <div className="flex flex-col">

        <div className="flex justify-between pt-5">
          <h1 className="font-semibold text-4xl">Reservas Pendentes</h1>
          <button className="rounded-lg bg-slate-300 hover:bg-blue-300 p-2"
            onClick={() => setModalOpen(true)}>
            Criar Reserva
          </button>

          {/* Renderizar o modal apenas quando modalOpen for true */}
          {modalOpen &&
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
              <div>Conteúdo do modal</div>
            </Modal>
          }
        </div>

        {/*Checagem se existe posts */}
        {reservas.length === 0 ? (<p>Carregando...</p>) : (
          reservas.map((reserva) => (
            <div className=" mt-5 gap-5" key={reserva.id}>
              <ReserveCard>{reserva.nome} {reserva.id}</ReserveCard>
            </div>
          ))
        )}
      </div>
    </Base>
  )
}

export default Home