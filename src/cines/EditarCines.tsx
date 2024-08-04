import FormularioCines from "./FormularioCines";

export default function EditarCines(){
    return(
        <>
        <h3>Editar Cines</h3>
        <FormularioCines 
            modelo={{nombre: 'Sambil', latitud: -17.855286, longitud: -63.220171 }}
            onSubmit={valores => console.log(valores)}
        />
        </>
    )
}