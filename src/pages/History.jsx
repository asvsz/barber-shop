import Base from "../components/base"
import BoxCard from "../components/box-card"
import ReserveCard from "../components/reserve-card"
import ReserveDelete from "../components/reserve-delete";
import { useReservas } from "../hooks/utils"

function History() {

  const { reservas } = useReservas();

  //Filtra as reservas que estão concluídas 

  const reservasConcluidas = reservas.filter(reserva => reserva.status == 'CONFIRMADO')

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
                  <select className="appearance-none row-start-1 col-start-1 bg-slate-50 ">
                    <option>{reserva.status}</option>
                    <option>Concluído</option>
                  </select></p>

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