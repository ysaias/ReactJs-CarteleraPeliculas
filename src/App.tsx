import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import rutas from './route.config';
import Menu from './utils/Menu';
import ConfiguraValidaciones from './ConfigurarValidaciones';
import { useEffect, useState } from 'react';
import { claim } from './auth/auth.model';
import AutenticacionContext from './auth/AutenticacionContext';
import { obtenerClaims } from './auth/manejadorJWT';
import { configurarInterceptor } from './utils/interceptores';

ConfiguraValidaciones();
configurarInterceptor(); // Configura el interceptor al inicio

function App() {

  const [claims, setClaims] = useState<claim[]>([]);

  useEffect(() => {
    setClaims(obtenerClaims());
  }, [])

  function actualizar(claims: claim[]) {
    setClaims(claims);
  }

  function esAdmin() {
    return claims.findIndex(claim => claim.nombre === 'role' && claim.valor === 'admin') > -1;
  }

  return (
    <>
      <BrowserRouter>
        <AutenticacionContext.Provider value={{ claims, actualizar }}>

          <Menu />
          <div className='container'>
            <Routes>
              {rutas.map(ruta =>
                <Route
                  key={ruta.path}
                  path={ruta.path}
                  element={
                    ruta.esAdmin && !esAdmin()
                      ? <>No tiene permiso para acceder a este componente</>
                      : <ruta.componente />
                  }
                />
              )}
            </Routes>
          </div>

        </AutenticacionContext.Provider>
      </BrowserRouter>


    </>
  );
}

export default App;
