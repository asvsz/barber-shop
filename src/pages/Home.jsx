import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../services/supabase"

function Home() {
  
  const [user, setUser] = useState([])
  const navigate = useNavigate()

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

  async function signOutUser() {
    await supabase.auth.signOut()
    navigate("/")
  }


  return (
    <div>
      Seja Bem-Vindo
      
      <img src={avatar} />
      <h1>{userName}</h1>
      <h1>{userEmail}</h1>
      <button onClick={()=> signOutUser()}>Sair</button>
    </div>
  )
}

export default Home