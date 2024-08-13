<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import rutas from './route.config';
import Menu from './utils/Menu';
import ConfiguraValidaciones from './ConfigurarValidaciones';


ConfiguraValidaciones();


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className='container'>
          <Routes>
            {rutas.map(ruta => <Route key={ruta.path} path={ruta.path} element={<ruta.componente/>} ></Route> )}
          </Routes>
        </div>
      </BrowserRouter> 
    
    </>


  );

=======
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Menu from './utils/Menu';
import rutas from './route.config';
import configuarionValidacion from './validaciones';

configuarionValidacion();

function App() {

  return (
    
      <Router>
        
        <Menu/>

        <div className='container'>   
            <Switch>
              {rutas.map(ruta =>
               <Route key={ruta.path} path={ruta.path} 
                 exact={ruta.exact}>
                 <ruta.componente/> 
               </Route>)}
             
            </Switch>
        </div>
      </Router>     
  
  );
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
}

export default App;
