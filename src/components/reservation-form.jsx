import axios from "axios";
import { useState } from "react"


const ReservationForm = ({ onSubmit }) => {

  const getFormattedCurrentDateTime = () => {
    const currentDateTime = new Date();
    const formattedDateTime = [
      currentDateTime.getFullYear(),
      currentDateTime.getMonth() + 1,
      currentDateTime.getDate(),
      currentDateTime.getHours(),
      currentDateTime.getMinutes(),
      currentDateTime.getSeconds(),
    ];
    return formattedDateTime;
  };

  const [formData, setFormData] = useState({
    nomeCliente: '',
    telefoneCliente: '',
    horario: getFormattedCurrentDateTime(), // Função para obter a data e hora atual formatada
    status: 'Pendente',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const formattedDateTime = getFormattedCurrentDateTime();

      await axios.post('https://system-barbeshop-1a0a77e5c400.herokuapp.com/reservas', {
        nomeCliente: formData.nomeCliente,
        telefoneCliente: formData.telefoneCliente,
        horario: formattedDateTime, // Ou formData.horario, dependendo do que a API espera
        status: formData.status,
      })

      console.log('Reserva enviada com sucesso')
      setModalOpen(false); // Feche o modal após o envio bem-sucedido

    } catch (error) {
      console.error('Erro ao enviar os dados do formulário:', error.message)
      console.error('Erro ao enviar os dados do formulário:', error.response.data)
    }
  }



  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome do Cliente:
        <input
          text="text"
          name="nomeCliente"
          value={formData.nomeCliente}
          onChange={handleChange}
          required
        />
      </label>

      <br />

      <label>
        Telefone do Cliente:
        <input
          type="tel"
          name="telefoneCliente"
          value={formData.telefoneCliente}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Horário:
        <input
          type="datetime-local"
          name="horario"
          value={formData.horario}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">enviar</button>
    </form>
  )
}

export default ReservationForm



