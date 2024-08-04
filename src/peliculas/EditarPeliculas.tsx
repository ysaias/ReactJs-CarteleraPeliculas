import { actorPeliculaDTO } from "../actores/actores.model";
import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPelicula from "./FormularioPeliculas";

export default function EditarPeliculas(){
   
    const generosNoSeleccionados: generoDTO[] = [
        {id: 2, nombre: 'Comedia'}
       
    ]

    const generosSeleccionados: generoDTO[] = [
        {id: 1, nombre: 'Accion'},
        {id: 3, nombre: 'Terror'}
    ]

    const cinesSeleccionados: cineDTO[] = [
        {id: 3, nombre: 'Lo que sea'}
    ]

    const cinesNoSeleccionados: cineDTO[] = [{id: 1, nombre: 'Agora'},
        {id: 2, nombre: 'Sambil'}
    ]

    const actoresSeleccionados: actorPeliculaDTO[] = [
        {
            id: 1, nombre: "Tom Holland",
            personaje: "", 
            foto: 'https://m.media-amazon.com/images/M/MV5BZGU4MWE0N2QtODEwNC00MjkyLTlmMWMtMzNjNmZjZDc3NDE3XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_QL75_UX1230_.jpg'
        }
    ]

   
    return(
        <>
        <h3>Editar Peliculas</h3>
        <FormularioPelicula 
            actoresSeleccionados={actoresSeleccionados}
            cinesNoSelecionados={cinesNoSeleccionados}
            cinesSeleccionados={cinesSeleccionados}
            generosNoSeleccionados={generosNoSeleccionados}
            generosSeleccionados={generosSeleccionados}
            modelo={{titulo: 'Spider-Man', enCines: true, trailer: 'url', 
                fechaLanzamiento: new Date('2009-01-01T00:00:00')
            }}
            onSubmit={valores => console.log(valores)}
        />
        </>
    )
}