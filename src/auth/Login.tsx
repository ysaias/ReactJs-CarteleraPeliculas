import { useState } from "react";
import { credencialesUsuario, respuestaAutentificacion } from "./auth.model";
import FormularioAuth from "./FormularioAuth";
import axios from "axios";
import { urlCuentas } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";

export default function Login() {

    const [errores, setErrores] = useState<string[]>([]);

    async function Login(credenciales: credencialesUsuario) {
        try {
            const respuesta = await
                axios.post<respuestaAutentificacion>(`${urlCuentas}/login`, credenciales);

        } catch (error) {
            setErrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Login</h3>
            <MostrarErrores errores={errores} />
            <FormularioAuth
                modelo={{ email: '', password: '' }}
                onSubmit={async valores => await Login(valores)}

            />
        </>
    )
}