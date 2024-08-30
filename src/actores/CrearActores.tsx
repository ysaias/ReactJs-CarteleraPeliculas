
import axios from "axios";
import { urlActores } from "../utils/endpoints";
import { actorCreacionDTO } from "./actores.model";
import FormulaioActores from "./FormularioActores";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MostrarErrores from "../utils/MostrarErrores";
import { convertirActorAFormData } from "../utils/FormDataUtils";

export default function CrearActores(){
    
    const [errores, setErrores] = useState();
    const navigate = useNavigate();

    async function crear(actor: actorCreacionDTO){
        try{
            const formData = convertirActorAFormData(actor);
            await axios({
                method: 'post',
                url: urlActores,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            })
            navigate('/actores');
        }
        catch(error){
            
            setErrores(error.response.data)
        }
    }

    
    return(
        <><h3>Crear Actores</h3>
        <MostrarErrores errores={errores} />
        <FormulaioActores modelo={{nombre: '', fechaNacimiento: undefined, biografia:''}}
            onSubmit={async valores => await crear(valores)}
         />
        </>
    )
}
