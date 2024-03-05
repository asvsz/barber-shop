import Base from "../components/base"
import { NaviButtons } from "../components/navigation-buttons"

function Home() {


  return (
    <Base>
      <div className="flex flex-col z-10">
        <NaviButtons />
        <div className="flex justify-between">
          <h1>Reservas Pendentes</h1>
          <button className="rounded-lg bg-slate-300 hover:bg-blue-300 p-2">Criar Reserva</button>
        </div>
      </div>
    </Base>
  )
}

export default Home