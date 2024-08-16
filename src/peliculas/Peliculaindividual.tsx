import { Pelicula } from "./peliculas.model"
import './PeliculaIndividual.module.css'

export default function PeliculaIndividual(props: peliculaIndividualProps){
   const construirLink = () => `/pelicula/${props.pelicula.id}`;

   return(
    <div className=".div">
        <a href={construirLink()}>
            <img src={props.pelicula.poster} alt="Poster" />
        </a>
        <p>
            <a href={construirLink()}>{props.pelicula.titulo}</a>
        </p>
    </div>
   )
}

interface peliculaIndividualProps{
    pelicula: Pelicula;
}