import axios from "axios";
import { cineCreacionDTO } from "./cines.model";
import FormularioCines from "./FormularioCines";
import { urlCines } from "../utils/endpoints";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MostrarErrores from "../utils/MostrarErrores";


export default function CrearCines(){

    const [errores, setErrores] = useState<string[]>([]);
    const navigate = useNavigate();
    
    async function crear(cine: cineCreacionDTO ) {
        try {
            
            await axios.post(urlCines, cine);
            navigate("/cines");
        } catch (error) {
            setErrores(error.response.data)
            console.log(error.response.data)
        }        
    }
    
    
    return(
        <>
        <h3>Crear Cines</h3>
        <MostrarErrores errores={errores} />
        <FormularioCines
            modelo={{nombre: ''}}
            onSubmit={async valores => await crear(valores)}
        />
        </>
    )
}
