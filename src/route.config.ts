import CrearActores from "./actores/CrearActores";
import EditarActores from "./actores/EditarActores";
import IndiceAtores from "./actores/IndiceActores";
import CrearCines from "./cines/CrearCines";
import EditarCines from "./cines/EditarCines";
import IndiceCines from "./cines/IndiceCines";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/indiceGeneros";
import LandingPage from "./landingPage";
import CrearPeliculas from "./peliculas/CrearPeliculas";
import EditarPeliculas from "./peliculas/EditarPeliculas";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";
import RedireccionarALandinpage from "./utils/RedirecionarALandingpage";

const rutas = [
    { path: '/generos/crear', componente: CrearGenero },
    { path: '/generos/editar/:id', componente: EditarGenero },
    { path: '/generos', componente: IndiceGeneros, exact: true },

    { path: '/actores/crear', componente: CrearActores },
    { path: '/actores/editar/:id', componente: EditarActores },
    { path: '/actores', componente: IndiceAtores, exact: true },

    { path: '/cines/crear', componente: CrearCines },
    { path: '/cines/editar/:id', componente: EditarCines },
    { path: '/cines', componente: IndiceCines, exact: true },
   
    { path: '/peliculas/crear', componente: CrearPeliculas },
    { path: '/peliculas/editar/:id', componente: EditarPeliculas },
    { path: '/peliculas/filtrar', componente: FiltroPeliculas },
    
    { path: '/', componente: LandingPage, exact: true },

    { path: '*', componente: RedireccionarALandinpage}
];

export default rutas;
