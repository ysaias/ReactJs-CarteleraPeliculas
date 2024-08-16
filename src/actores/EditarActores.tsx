
import FormulaioActores from "./FormularioActores";

export default function EditarActores(){
    return(
        <><h3>Editar Actores</h3>
        <FormulaioActores 
        modelo={{nombre: 'Ton Holland', 
            fechaNacimiento: new Date('1983-04-08T00:00:00'),
            fotoUrl: 'https://m.media-amazon.com/images/M/MV5BMjNjNWY4MGUtZThkNS00Zjk4LWExMjEtMjdlM2NhNjk5ZGNiXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_QL75_UX276_.jpg'
        }}
            onSubmit={valores => console.log(valores)}
         />
        </>
    )
}