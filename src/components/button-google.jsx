import React, { useEffect } from 'react';
import supabase from '../services/supabase';
import { useNavigate } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared'

function ButtonGoogle() {

  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (e, session) => {
      if (session?.user) {
        navigate('/home');
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <div className="flex justify-center items-center ">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google']}
        showLinks={false}
      />
    </div>
  )

}

export default ButtonGoogle