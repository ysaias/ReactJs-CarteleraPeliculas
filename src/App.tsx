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
}

export default App;
