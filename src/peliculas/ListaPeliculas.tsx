import PeliculaIndividual from "./Peliculaindividual";
import { pelicula } from "./peliculas.model";
import css from './ListaPeliculas.module.css';
import ListadoGenerico from "../utils/ListadoGenerico";


export default function ListaPeliculas(props: ListaPeliculasProps){

        
        return(
            
            <ListadoGenerico 
             listado={props.peliculas}>
                <div className={css.div}>
                    {props.peliculas?.map(pelicula => 
                    <PeliculaIndividual pelicula={pelicula}
                          key={pelicula.id}   
                    />)}
                </div>
            </ListadoGenerico>
        )
       
    }

    


interface ListaPeliculasProps{
    peliculas?: pelicula[]
}