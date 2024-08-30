import axios from "axios";
import FormularioAuth from "./FormularioAuth";
import { urlCuentas } from "../utils/endpoints";
import { useState } from "react";
import MostrarErrores from "../utils/MostrarErrores";
import { credencialesUsuario, respuestaAutentificacion } from "./auth.model";

export default function Registro() {
    const [errores, setErrores] = useState<string[]>([]);

    async function resgistrar(credenciales: credencialesUsuario) {

        try {
            const respuesta = await axios
                .post<respuestaAutentificacion>(`${urlCuentas}/crear`, credenciales);
            console.log("Respuesta "+ respuesta.data);

        } catch (error) {
            setErrores(error.response.data);
        }
    }

    return (

        <>
            <h3>Registro</h3>
            <MostrarErrores errores={errores} />
            <FormularioAuth modelo={{ email: '', password: '' }}
                onSubmit={async valores => await resgistrar(valores)}
            />
        </>

    )


}