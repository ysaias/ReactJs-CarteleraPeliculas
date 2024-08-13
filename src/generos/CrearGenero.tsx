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

