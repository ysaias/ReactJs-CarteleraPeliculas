
import { useNavigate, useParams } from "react-router-dom";
import FormularioGeneros from "./FormularioGeneros";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlGeneros } from "../utils/endpoints";
import { generoCreacionDTO, generoDTO } from "./generos.model";
import Cargando from "../utils/Cargando";
import MostrarErrores from "../utils/MostrarErrores";

export default function EditarGenero(){
    
   const {id}: any = useParams();
   const [genero, setGenero] = useState<generoDTO>();
   const [errores, setErrores] = useState<string[]>([]);
   const navigate = useNavigate();

   useEffect(() =>{
    axios.get(`${urlGeneros}/${id}`)
    .then((respuesta: AxiosResponse<generoDTO>) => {
        setGenero(respuesta.data);
    })
   })

   async function Editar(generoEditar:generoCreacionDTO) {
    try{
        await axios.put(`${urlGeneros}/${id}`, generoEditar);
        navigate('/generos');
    }
    catch(error){
        setErrores(error.response.data);
    }
    
   }
    
    return(
        <><h3>Editar genero</h3>
        <MostrarErrores errores={errores} />
        {genero ?  <FormularioGeneros modelo={genero} 
            onSubmit={ async valores=> {
                await Editar(valores);
                console.log(valores);
            }}
          /> : <Cargando/> }
        
        </>

    )
}