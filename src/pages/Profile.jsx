import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../services/supabase"
import { NaviButtons } from "../components/navigation-buttons"

function Profile() {
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

  return (
    <div>
      <NaviButtons/>
      <img src={avatar} />
      <h1>{userName}</h1>
      <h1>{userEmail}</h1>
      <button onClick={async () => {
        await supabase.auth.signOut()
        navigate("/")
      }}>Sair</button>
    </div>
  )
}

export default Profile