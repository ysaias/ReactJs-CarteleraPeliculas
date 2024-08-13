<<<<<<< HEAD
import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Menu.module.css';

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className={({ isActive }) => isActive ? `navbar-brand ${css.active}` : 'navbar-brand'}>
          React Peliculas
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/generos" className={({ isActive }) => isActive ? `nav-link ${css.active}` : 'nav-link'}>
                Géneros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/actores" className={({ isActive }) => isActive ? `nav-link ${css.active}` : 'nav-link'}>
                Actores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cines" className={({ isActive }) => isActive ? `nav-link ${css.active}` : 'nav-link'}>
                Cines
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/peliculas/filtrar" className={({ isActive }) => isActive ? `nav-link ${css.active}` : 'nav-link'}>
                Filtrar Peliculas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/peliculas/crear" className={({ isActive }) => isActive ? `nav-link ${css.active}` : 'nav-link'}>
                Crear Peliculas
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
=======
import {NavLink} from "react-router-dom";


export default function Menu(){
    const claseActiva = "active";
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            <div className="container-fluid">
               
                <NavLink exact to="/" activeClassName={claseActiva} className="navbar-brand">
                React Peliculas
                </NavLink>
               
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto m-3 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact to="/generos"  className="nav-link">
                                Géneros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/peliculas/filtrar" activeClassName={claseActiva} className="nav-link">
                                Filtar Peliculas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/actores" activeClassName={claseActiva} className="nav-link">
                                Actores
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/cines" activeClassName={claseActiva} className="nav-link">
                                Cines
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/peliculas/crear" activeClassName={claseActiva} className="nav-link">
                                Crear Peliculas
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>    
        </nav>
    )
}
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
