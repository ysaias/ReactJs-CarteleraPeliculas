import axios, { AxiosResponse } from "axios";
import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cargando from "../utils/Cargando";
import { urlPeliculas } from "../utils/endpoints";
import { convertirPeliculaAFormData } from "../utils/FormDataUtils";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioPeliculas from "./FormularioPeliculas";
import { peliculaCreacionDTO, peliculasPostGetDTO } from "./peliculas.model";

export default function CrearPeliculas() {

    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState<generoDTO[]>([]);
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState<cineDTO[]>([]);
    const [cargado, setCargado] = useState(false);
    const navigate = useNavigate();
    const [errores, setErrores] = useState<string[]>([]);
   
    useEffect(() => {
        axios.get(`${urlPeliculas}/postget`)
        .then((respuesta: AxiosResponse<peliculasPostGetDTO>) => {
            
            setGenerosNoSeleccionados(respuesta.data.generos);
            setCinesNoSeleccionados(respuesta.data.cines);
            setCargado(true);
        })
    }, [])


    async function crear(pelicula: peliculaCreacionDTO){
        try {
            const formData = convertirPeliculaAFormData(pelicula);
            await axios({
                method: 'post',
                url: urlPeliculas,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            }).then((respuesta: AxiosResponse<number>) => {
                navigate(`/pelicula/${respuesta.data}`);
            })
        }
        catch(error) {
            setErrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Crear Película</h3>
            <MostrarErrores errores={errores} />
            {cargado ?  <FormularioPeliculas
            actoresSeleccionados={[]}
            cinesNoSeleccionados={cinesNoSeleccionados}
            cinesSeleccionados={[]}
            generosNoSeleccionados={generosNoSeleccionados}
            generosSeleccionados={[]}
                modelo={{ titulo: '', enCines: false, trailer: '' }}
                onSubmit={async valores => crear(valores)}
            /> : <Cargando />}
           
        </>
    )
}