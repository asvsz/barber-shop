import React from 'react';
import  ButtonGoogle  from '../components/button-google';
import Base from '../components/base';

function Login() {

  return (
    <>
      <Base>
        <div className="flex flex-col items-center justify-center gap-10 p-8 rounded-lg bg-zinc-300 h-100 w-80">
          <ButtonGoogle/>
        </div>
      </Base>
    </>
  )
};

export default Login
