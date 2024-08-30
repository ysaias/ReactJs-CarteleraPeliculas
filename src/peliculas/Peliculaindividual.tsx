import { peliculaDTO } from "./peliculas.model";
import css from "./PeliculaIndividual.module.css"
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import confirmar from "../utils/Confirmar";
import axios from "axios";
import { urlPeliculas } from "../utils/endpoints";
import { useContext } from "react";
import AlertaContext from "../utils/AlertaContext";
import Autorizado from "../auth/Autorizado";
export default function PeliculaIndividual(props: peluculaIndividualProps) {

    const construirLink = () => `/pelicula/${props.pelicula.id}`;
    const alerta = useContext(AlertaContext);

    function borrarPelilcula() {
        axios.delete(`${urlPeliculas}/${props.pelicula.id}`)
            .then(() => {
                alerta();
            })
    }

    return (
        <div className={css.div}>
            <a href={construirLink()}>
                <img alt="imagen individual" src={props.pelicula.poster} />
            </a>
            <p>
                <a href={construirLink()} > {props.pelicula.titulo}</a>
            </p>

            <Autorizado role="admin"
                autorizado={
                
                <div>
                    <Link style={{ marginRight: '1rem' }} className="btn btn-info"
                        to={`/peliculas/editar/${props.pelicula.id}`}>Editar</Link>
                    <Button className="btn btn-danger"
                        onClick={() => confirmar(() => borrarPelilcula())}>Borarr</Button>
                </div>
                }        
            
            />

        </div>
    )
}

interface peluculaIndividualProps {
    pelicula: peliculaDTO;
}