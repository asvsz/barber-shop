import React, { useEffect } from 'react';
import Base from '../components/base';
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

    // call unsubscribe to remove the callback
    return () => {
      data.subscription.unsubscribe()
    }
  }, [navigate])

  return (
    <>
      <Base>
        <div className="flex flex-col items-center justify-center gap-10 p-8 rounded-lg bg-zinc-300 h-100 w-80">
          <div className="flex justify-center items-center ">
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={['google']}
              showLinks={false}
            />
          </div>
        </div>
      </Base>
    </>
  )
};

export default Login
