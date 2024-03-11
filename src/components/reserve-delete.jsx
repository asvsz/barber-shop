import axios from "axios";
import { MdDelete } from "react-icons/md";

function ReserveDelete({reserveId}) {

  const handleDelete = async (id) => {
    try {

      await axios.delete(`https://system-barbeshop-1a0a77e5c400.herokuapp.com/reservas/${id}`)
      console.log('Reserva excluida com sucesso')

      // Recarrega a página após a exclusão
      window.location.reload();

    } catch (error) {
      console.error('Erro ao excluir reserva', error)

    }
  }
  return (
    <button className="w-1/5 text-2xl hover:text-red-600 pl-10" onClick={() => handleDelete(reserveId)}>
      <MdDelete />
    </button>
  )
}

export default ReserveDelete