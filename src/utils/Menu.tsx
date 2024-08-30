import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css'; // Importa como styles para un CSS Module
import Autorizado from '../auth/Autorizado';
import Button from './Button';
import { logout } from '../auth/manejadorJWT';
import AutenticacionContext from '../auth/AutenticacionContext';

export default function Menu() {
  
  const {actualizar, claims} = useContext(AutenticacionContext);

  function obtenerNombreUsuario(): string{
    return claims.filter(x => x.nombre === "email")[0]?.valor;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className={({ isActive }) => isActive ? `navbar-brand ${styles.active}` : 'navbar-brand'}>
          React Peliculas
        </NavLink>

        <div className="collapse navbar-collapse" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink to="/peliculas/filtrar" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'}>
                Filtrar Peliculas
              </NavLink>
            </li>
            <Autorizado role='admin'
              autorizado={
                <>
                  <li className="nav-item">
                    <NavLink to="/generos" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'}>
                      Géneros
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/actores" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'}>
                      Actores
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/cines" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'}>
                      Cines
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/peliculas/crear" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'}>
                      Crear Peliculas
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/usuarios" className={({ isActive }) => isActive ? `nav-link ${styles.active}` : 'nav-link'}>
                      Usuarios
                    </NavLink>
                  </li>
                </>
              }
            /> 

          </ul>

          <div className='d-flex'>
            <Autorizado
              autorizado={<> 
                <span style={{marginRight: '10px'}} className='nav-link'>Hola, {obtenerNombreUsuario()}</span>
                <Button className='nav-link btn btn-link' 
                onClick={() => {
                  logout();
                  actualizar([]);
                }}
                >Log Out</Button>
              </>}
              noAutorizado={
                <>
                  <NavLink to="/Registro" style={{marginRight: '10px'}} className={({ isActive }) => isActive ? `nav-link btn btn-link ${styles.active}` : 'nav-link btn btn-link'}>
                    Registro
                  </NavLink>
                  <NavLink to="/Login" className={({ isActive }) => isActive ? `nav-link btn btn-link ${styles.active}` : 'nav-link btn btn-link'}>
                    Login
                  </NavLink>
                </>
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
