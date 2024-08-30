
import EditarEntidad from "../utils/EditarEntidad";
import { urlGeneros } from "../utils/endpoints";
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO, generoDTO } from "./generos.model";

export default function EditarGenero() {





    return (

        <EditarEntidad<generoCreacionDTO, generoDTO>
            url={urlGeneros} urlIndice="/generos" nombreEntidad="Géneros"
        >
            {(entidad, Editar) =>
                <FormularioGeneros
                    modelo={entidad}
                    onSubmit={async valores => {
                        await Editar(valores)
                    }}
                />}
        </EditarEntidad>

    )
}