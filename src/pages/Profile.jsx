import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../services/supabase"
import Base from "../components/base"
import { useBarbearia } from "../hooks/utils"
import { FaRegEdit } from "react-icons/fa";
import Modal from "../components/modal"
import CustomButton from "../components/custom-button"

function Profile() {
  const [user, setUser] = useState([])
  const navigate = useNavigate()
  const { barbearia } = useBarbearia();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user)
        }
      })
    }
    getUserData()
  }, [])

  const avatar = user?.user_metadata?.avatar_url
  const userName = user?.user_metadata?.full_name
  const userEmail = user?.user_metadata?.email

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      navigate('/')
    } catch (error) {
      console.error('Error logging out:', error.message)
    }
  };

  return (

    <Base>
      <div className="flex flex-col justify-center items-center gap-10">
        <img className="h-30 w-30 rounded-full shadow-md" src={avatar} />
        <h1 className="text-3xl font-medium">{userName}</h1>

        <div className="bg-secondary rounded-lg border border-slate-300 px-5 py-3">
          <h2 className="text-slate-400 text-sm">Email</h2>
          <p className="text-lg">{userEmail}</p>
        </div>

        <div className="bg-secondary rounded-lg border border-slate-300 px-5 py-3">
          <h2 className="text-slate-400 text-sm">
            Nome da Barbearia
          </h2>
          <div className="flex items-center text-lg justify-between gap-6">

            {barbearia.length === 0 ? (
              <p>Carregando...</p>
            ) : (
              barbearia.map((barb) => (
                <p className="w-1/3" key={barb.id}>
                  {barb.nome}
                </p>
              ))
            )}
            <button onClick={() => setModalOpen(true)} >
              <FaRegEdit />
            </button>
            
            {/* Renderizar o modal apenas quando modalOpen for true */}
            {modalOpen &&
              <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                Modal
              </Modal>
            }
          </div>

          
        </div>

        <CustomButton name='sair' onClick={handleLogout}>
          Sair
        </CustomButton>
      </div>
    </Base>
  )
}

export default Profile