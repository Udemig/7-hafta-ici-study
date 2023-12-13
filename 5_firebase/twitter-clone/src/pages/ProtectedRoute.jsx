import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase/config';

const ProtectedRoute = () => {
  // kullanıcının yetkisi var mı?
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    // anlık olarak kullanıcnın oturumunu izler
    // veridğimiz fonksiyon her oturum değiştiğinde çalışır
    // ve parametre olarak aktif kullanıcyı alır
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });

    return () => unsub();
  }, []);

  // kulancının yetkisi yoksa logine yönlendir
  if (isAuth === false) {
    return <Navigate to={'/'} replace />;
  }

  // kullanıcın yekisi varsa alt route'a geçmesine izin ver
  return <Outlet />;
};

export default ProtectedRoute;
