
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

}

export default App;