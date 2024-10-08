import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom"
import { peliculaDTO } from "./peliculas.model";
import axios, { AxiosResponse } from "axios";
import { urlPeliculas, urlRatings } from "../utils/endpoints";
import Cargando from "../utils/Cargando";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Mapa from "../utils/Mapa";
import { coordenadaDTO } from "../utils/coordenadas.model";
import Rating from "../utils/Rating";
import Swal from "sweetalert2";

export default function DetallePelicula() {

    const { id }: any = useParams();
    const [pelicula, setPelicula] = useState<peliculaDTO>();

    useEffect(() => {
        axios.get(`${urlPeliculas}/${id}`)
            .then((respuesta: AxiosResponse<peliculaDTO>) => {
                console.log(respuesta.data);
                respuesta.data.fechaLanzamiento = new Date(respuesta.data.fechaLanzamiento);
                setPelicula(respuesta.data);
            })
    }, [id])
      

      const coordenadas = useMemo(() => {
        if (pelicula?.cines) {
          return pelicula.cines.map(cine => ({
            lat: cine.latitud,
            lng: cine.longitud,
            nombre: cine.nombre
          } as coordenadaDTO));
        }
        return [];
      }, [pelicula?.cines]);
      


    function generaUrlYoutubeEmbebido(url: any): string {
        if (!url) {
            return '';
        }

        var video_id = url.split('v=')[1];
        var posicionAmpersand = video_id.indexOf('&');
        if (posicionAmpersand !== -1) {
            video_id = video_id.substring(0, posicionAmpersand);
        }

        return `https://www.youtube.com/embed/${video_id}`
    }

    async function onVote(voto: number){
        try {
            console.log('Enviando datos:', {puntuacion: voto, peliculaId: id});
            await axios.post(urlRatings, {puntuacion: voto, peliculaId: id});
            Swal.fire({icon: 'success', title: 'Voto recibido'});
        } catch (error) {
            console.error('Error al votar:', error); // Detalles adicionales del error
        }
    }

    return (
        pelicula ?
            
            <div style={{ display: "flex" }}>
                
                <div>
                    <h2>{pelicula.titulo} ({pelicula.fechaLanzamiento.getFullYear()})</h2>
                    {pelicula.generos?.map(genero =>
                        <Link key={genero.id} style={{ marginRight: '5px' }}
                            className="btn btn-primary btn-sm rounded-pill"
                            to={`/peliculas/filtrar?generoId=${genero.id}`}
                        >
                            {genero.nombre}
                        </Link>)
                    }
                      
                    | {pelicula.fechaLanzamiento.toDateString()} 
                    | Voto promedio: {pelicula.promedioVoto}
                     |  Tu voto: <Rating maximoValor={5} 
                        valorSeleccionado={pelicula.votoUsuario!} onChange={onVote} />

                    <div style={{ display: 'flex', marginTop: '1rem' }}>
                        <span style={{ display: 'inline-block', marginRight: '1rem' }}>
                            <img src={pelicula.poster} style={{ width: '225px', height: '315px' }} alt="poster" />
                        </span>
                        {pelicula.trailer ? <div>
                            <iframe
                                title="youtube-trailer"
                                width="560"
                                height="315"
                                src={generaUrlYoutubeEmbebido(pelicula.trailer)}

                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div> : null}
                    </div>

                    {pelicula.resumen ?
                        <div style={{ marginTop: '1rem' }}>
                            <h3>Resumen </h3>
                            <div>
                                <ReactMarkdown>{pelicula.resumen}</ReactMarkdown>
                            </div>
                        </div> : null}

                    {pelicula.actores && pelicula.actores.length > 0 ?
                        <div style={{marginTop: '1rem'}}>
                            <h3>Actores</h3>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                {pelicula.actores?.map(actor => 
                                    <div key={actor.id} style={{marginBottom: '2px'}}>
                                        <img src={actor.foto} alt="foto"
                                        style={{width:'50px', verticalAlign:'middle'}} />
                                        <samp style={{ 
                                            display: 'inline-block', width: '200px',
                                            marginLeft: '1rem' }} >
                                                {actor.nombre}
                                        </samp>
                                        <samp style={{ 
                                            display: 'inline-block', width: '45px',
                                            marginLeft: '1rem' }} >...</samp>
                                        <span>{actor.personaje}</span>
                                    </div>
                                )}
                            </div>
                        </div> : null}
                                
                    {pelicula.cines && pelicula.cines.length > 0 ?
                        <div>
                            <h2>Mostrándose en los siguientes cines</h2>
                            <Mapa soloLectura={true}  coordenadas={coordenadas} />
                        </div> : null }

                </div>

            </div> : <Cargando />
    )
}