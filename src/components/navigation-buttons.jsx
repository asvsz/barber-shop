import { Link } from "react-router-dom";

function NaviButtons() {
  return (
    <div className="flex justify-between items-center z-10">
      <div className="flex gap-8 m-2">
        <Link className="rounded-lg bg-slate-300 hover:bg-blue-300 p-2" to="/home">
          Página Inicial
        </Link >
        <Link className="rounded-lg bg-slate-300 hover:bg-blue-300 p-2" to="/history">
          Historico
        </Link>
        <Link className="rounded-lg bg-slate-300 hover:bg-blue-300 p-2" to="/profile">
          Perfil
        </Link>

      </div>
    </div>
  )
}

export { NaviButtons }