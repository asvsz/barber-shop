import React, { useEffect } from 'react';
import supabase from '../services/supabase';
import { useNavigate } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared'

function Login() {


  const navigate = useNavigate()

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event) => {
      console.log(event)

      if (event === 'SIGNED_IN') {
        navigate('/home');
      } else {
        navigate('/');
      }
    });
    
    return () => {
      data.subscription.unsubscribe()
    }
  }, [navigate])

  return (
    <div className="flex h-screen w-screen bg-zinc-100 justify-center py-10 items-center">
      <div className="flex flex-col items-center justify-center gap-10 rounded-lg bg-zinc-300 w-80 h-96">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['google']}
            showLinks={false}
          />
      </div>
</div>
  )
};

export default Login
