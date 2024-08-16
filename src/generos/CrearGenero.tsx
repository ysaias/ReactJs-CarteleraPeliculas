
import FormularioGeneros from "./FormularioGeneros";
import axios from "axios";
import { generoCreacionDTO } from "./generos.model";
import { urlGeneros } from "../utils/endpoints";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MostrarErrores from "../utils/MostrarErrores";



export default function CrearGenero() {

  const navigate = useNavigate();
  const [errores, setErrores] = useState<string[]>([]);

   async function crear(genero: generoCreacionDTO) {
    
     try {
      
        await axios.post(urlGeneros, genero);
        navigate('/generos');

     } catch (error) {
        setErrores(error.response.data);
        
     }
   }

    return (
        <><h3>Crear genero</h3>
          <MostrarErrores errores={errores}/>
          <FormularioGeneros modelo={{nombre:''}} 
            onSubmit={ async valores=> {
               await crear(valores);
            }}
          />


        </>
    )
}
