import { Pelicula } from "./peliculas.model";
import css from './PeliculaIndividual.module.css';

export default function PeliculaIndividual(props: peluculaIndividualProps){

   const construirLink = () => `/pelicula/${props.pelicula.id}`;
   

    return(
        <div className={css.div}>
            <a href={construirLink()}>
                <img alt="imagen individual" src={props.pelicula.poster} />
            </a> 
            <p>
                <a href={construirLink()} > {props.pelicula.titulo}</a>
            </p>
        </div>
    )
}

interface peluculaIndividualProps{
    pelicula: Pelicula;
}