import FormularioGeneros from "./FormularioGeneros";



export default function CrearGenero() {

    //const navigate = useNavigate();

    return (
        <><h3>Crear genero</h3>

          <FormularioGeneros modelo={{nombre:''}} 
            onSubmit={ async valores=> {
                await new Promise( r => setTimeout(r, 3000))
                console.log(valores);
            }}
          />


        </>
    )
}

