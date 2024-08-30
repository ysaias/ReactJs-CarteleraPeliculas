import axios from "axios";
import FormularioAuth from "./FormularioAuth";
import { urlCuentas } from "../utils/endpoints";
import { useContext, useState } from "react";
import MostrarErrores from "../utils/MostrarErrores";
import { credencialesUsuario, respuestaAutenticacion } from "./auth.model";
import { guardarTokenLocalStorage, obtenerClaims } from "./manejadorJWT";
import AutenticacionContext from "./AutenticacionContext";
import { useNavigate } from "react-router-dom";

export default function Registro() {
    const [errores, setErrores] = useState<string[]>([]);
    const {actualizar} = useContext(AutenticacionContext);
    const navigate = useNavigate();

    async function resgistrar(credenciales: credencialesUsuario) {

        try {
            const respuesta = await axios
                .post<respuestaAutenticacion>(`${urlCuentas}/crear`, credenciales);

                guardarTokenLocalStorage(respuesta.data);
                actualizar(obtenerClaims()); 
                navigate("/");
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