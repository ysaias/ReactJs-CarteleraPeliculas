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
