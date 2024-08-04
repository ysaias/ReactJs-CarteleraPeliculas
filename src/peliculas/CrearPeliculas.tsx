import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPelicula from "./FormularioPeliculas";

export default function CrearPeliculas(){

    const generos: generoDTO[] = [{id: 1, nombre: 'Accion'},
        {id: 2, nombre: 'Comedia'},
        {id: 3, nombre: 'Terror'}
    ]

    const cines: cineDTO[] = [{id: 1, nombre: 'Agora'},
        {id: 2, nombre: 'Sambil'},
        {id: 3, nombre: 'Lo que sea'}
    ]




    return(
        <>
        <h3>Crear Peliculas</h3>
        <FormularioPelicula 
            actoresSeleccionados={[]}
            cinesNoSelecionados={cines}
            cinesSeleccionados={[]}
            generosNoSeleccionados={generos}
            generosSeleccionados={[]}
            modelo={{titulo: '', enCines: false, trailer: ''}}
            onSubmit={valores => console.log(valores)}
        />
        </>
    )
}