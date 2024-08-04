import PeliculaIndividual from "./PelicualIndividual";
import { Pelicula } from "./peliculas.model";
import css from './ListadoPeliculas.module.css'
import ListadoGenerico from "../utils/ListadoGenerico";


export default function ListadoPeliculas(props: listadoPeliculas) {


    return (

        <ListadoGenerico listado={props.peliculas} 
       >
        <div className={css.div}>
            {props.peliculas?.map(pelicula =>
                <PeliculaIndividual pelicula={pelicula}
                    key={pelicula.id} />
            )}
        </div>

        </ListadoGenerico>
    )
}


interface listadoPeliculas {
    peliculas?: Pelicula[];
}