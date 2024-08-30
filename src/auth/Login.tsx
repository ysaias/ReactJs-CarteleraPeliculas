import { useContext, useState } from "react";
import { credencialesUsuario, respuestaAutenticacion } from "./auth.model";
import FormularioAuth from "./FormularioAuth";
import axios from "axios";
import { urlCuentas } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import { guardarTokenLocalStorage, obtenerClaims } from "./manejadorJWT";
import AutenticacionContext from "./AutenticacionContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const {actualizar} = useContext(AutenticacionContext);
    const [errores, setErrores] = useState<string[]>([]);
    const navigate = useNavigate();

    async function Login(credenciales: credencialesUsuario) {
        try {
            const respuesta = await
                axios.post<respuestaAutenticacion>(`${urlCuentas}/login`, credenciales);
                guardarTokenLocalStorage(respuesta.data);
                actualizar(obtenerClaims());

                // Configurar el encabezado Authorization globalmente en Axios
            axios.defaults.headers.common['Authorization'] = `Bearer ${respuesta.data.token}`;

                navigate("/");
               

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