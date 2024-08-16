import FormularioCines from "./FormularioCines";


export default function CrearCines(){
    return(
        <>
        <h3>Crear Cines</h3>
        <FormularioCines
            modelo={{nombre: ''}}
            onSubmit={valores => console.log(valores)}
        />
        </>
    )
}
