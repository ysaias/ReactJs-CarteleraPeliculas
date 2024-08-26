
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import rutas from './route.config';
import Menu from './utils/Menu';
import ConfiguraValidaciones from './ConfigurarValidaciones';
import { useState } from 'react';
import { claim } from './auth/auth.model';
import AutenticacionContext from './auth/AutenticacionContext';


ConfiguraValidaciones();


function App() {

    const [claims, setClaims] = useState<claim[]>([
      {nombre: 'Ysaias', valor: 'ysaiasceron@gmail.com'},
      {nombre: 'role', valor: 'admin'}
    ]);

    function actualizar(claims: claim[]) {
      setClaims(claims);
    }

    function esAdmin(){
      return claims.findIndex(claim => claim.nombre === 'role' && claim.valor === 'admin') > -1;
    }

  return (
    <>

      <AutenticacionContext.Provider value={{ claims, actualizar }}>
        
        <BrowserRouter>
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
        </BrowserRouter>

      </AutenticacionContext.Provider>

    </>
  );

}

export default App;