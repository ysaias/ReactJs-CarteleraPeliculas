import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedireccionarALandinpage(){
    const navigate = useNavigate();

    // Redirige al usuario a la página principal
    useEffect(() => {
        navigate('/');
   }, [navigate]);

    return null;
}