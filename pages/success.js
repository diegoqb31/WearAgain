import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Muchas Gracias por tu Orden!</h2>
        <p className="email-msg">Revisa tu correo para el recibo.</p>
        <p className="description">
            Si tienes alguna consulta, puedes hacerlo al siguiente correo
          <a className="email" href="mailto:weargain@gmail.com">
            weargain@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continuar comprando
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success