<<<<<<< HEAD
import FormularioGeneros from "./FormularioGeneros";
import axios from "axios";
import { generoCreacionDTO } from "./generos.model";
import { urlGeneros } from "../utils/endpoints";
import { useNavigate } from "react-router-dom";



export default function CrearGenero() {

  const navigate = useNavigate();

   async function crear(genero: generoCreacionDTO) {
    
     try {
      
        await axios.post(urlGeneros, genero);
        navigate('/generos');

     } catch (error) {
        console.log(error);
     }
   }

    return (
        <><h3>Crear genero</h3>

          <FormularioGeneros modelo={{nombre:''}} 
            onSubmit={ async valores=> {
               await crear(valores);
            }}
          />


        </>
    )
}

=======
import FomularioGeneros from "./FormularioGeneros";

export default function CrearGenero() {
  //const history = useHistory();

  return (
    <>
      <h3>Crear Genero</h3>

      <FomularioGeneros
        modelo={{ nombre: "" }}
        onSubmit={async (valores) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(valores);
        }}
      />
    </>
  );
}
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
