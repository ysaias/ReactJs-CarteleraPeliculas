import CrearActores from "./actores/CrearActores";
import EditarActores from "./actores/EditarActores";
import IndiceAtores from "./actores/IndiceActores";
import Indiceusuarios from "./auth/indiceUsuarios";
import Login from "./auth/Login";
import Registro from "./auth/Registro";
import CrearCines from "./cines/CrearCines";
import EditarCines from "./cines/EditarCines";
import IndiceCines from "./cines/IndiceCines";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";
import CrearPeliculas from "./peliculas/CrearPeliculas";
import DetallePelicula from "./peliculas/DetallePelicula";
import EditarPeliculas from "./peliculas/EditarPeliculas";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";
import RedireccionarALandinpage from "./utils/RedireccionandoALanding";


const rutas = [
    { path: '/generos/crear', componente: CrearGenero, esAdmin: true },
    { path: '/generos/editar/:id', componente: EditarGenero, esAdmin: true },
    { path: '/generos', componente: IndiceGeneros, exact: true, esAdmin: true },

    { path: '/actores/crear', componente: CrearActores, esAdmin: true },
    { path: '/actores/editar/:id', componente: EditarActores, esAdmin: true },
    { path: '/actores', componente: IndiceAtores, exact: true, esAdmin: true },

    { path: '/cines/crear', componente: CrearCines, esAdmin: true },
    { path: '/cines/editar/:id', componente: EditarCines, esAdmin: true },
    { path: '/cines', componente: IndiceCines, exact: true, esAdmin: true },
   
    { path: '/pelicula/:id', componente: DetallePelicula },
    { path: '/peliculas/crear', componente: CrearPeliculas, esAdmin: true },
    { path: '/peliculas/editar/:id', componente: EditarPeliculas, esAdmin: true },
    { path: '/peliculas/filtrar', componente: FiltroPeliculas },

    { path: '/registro', componente: Registro },
    { path: '/login', componente: Login },
    { path: '/usuarios', componente: Indiceusuarios, esAdmin: true },
    
    { path: '/', componente: LandingPage, exact: true },

    { path: '*', componente: RedireccionarALandinpage}
];

export default rutas;
