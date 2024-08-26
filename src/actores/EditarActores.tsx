

import EditarEntidad from "../utils/EditarEntidad";
import { urlActores } from "../utils/endpoints";
import { convertirActorAFormData } from "../utils/FormDataUtils";
import { actorDTO, actorCreacionDTO } from "./actores.model";
import FormulaioActores from "./FormularioActores";

export default function EditarActores(){
    
    const transformar = (actor: actorDTO) => {
        return{
            nombre: actor.nombre,
            fotoUrl: actor.foto,
            biografia: actor.biografia,
            fechaNacimiento: new Date(actor.fechaNacimiento)
        }
    }
    
    
    return(
        <>
         <EditarEntidad<actorCreacionDTO, actorDTO>
            url={urlActores} urlIndice="/actores" nombreEntidad="Actores"
            transformarFormData={convertirActorAFormData}
            transformar={transformar}
        >  
        {(entidad, editar) => 
            <FormulaioActores 
            modelo={entidad}
                onSubmit={async valores =>  await editar(valores) }
             />}
           

        </EditarEntidad>
        
        </>
    )
}