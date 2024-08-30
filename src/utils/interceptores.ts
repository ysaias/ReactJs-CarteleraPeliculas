import axios from "axios";
import { obtenerToken } from "../auth/manejadorJWT";

export function configurarInterceptor(){
    axios.interceptors.request.use(
        function (config){
            const token = obtenerToken();
            if (token){
                config.headers.Authorization = `bearer ${token}`; // Asegúrate de que 'Bearer' esté en mayúscula.
                
            }
            return config;
        },
        function (error){
            return Promise.reject(error);
        }
    )
}
