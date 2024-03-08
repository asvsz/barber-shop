import { Link } from "react-router-dom";
import { useBarbearia } from "../hooks/utils";

function NaviButtons() {

  const { barbearia } = useBarbearia();

  return (
    <div className="flex justify-between items-center z-10">
      <div className="font-bold text-2xl">
        {barbearia.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          barbearia.map((barb) => (
            <p className="w-1/3" key={barb.id}>
              {barb.nome}
            </p>
          ))
        )}
      </div>
      <div className="flex gap-5 m-2 ">
        <Link className="shadow-md rounded-lg bg-secondary  hover:bg-blue-700 text-quinary
         hover:text-primary p-2" to="/home">
          Página Inicial
        </Link >
        <Link className="shadow-md rounded-lg bg-secondary  hover:bg-blue-700 text-quinary
         hover:text-primary p-2" to="/history">
          Historico
        </Link>
        <Link className="shadow-md rounded-lg bg-secondary  hover:bg-blue-700 text-quinary
         hover:text-primary p-2" to="/profile">
          Perfil
        </Link>
      </div>
    </div>
  )
}

export { NaviButtons }