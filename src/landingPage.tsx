import { useEffect, useState } from "react";
import ListaPeliculas from "./peliculas/ListadoPeliculas";
import { LandingPageDTO } from "./peliculas/peliculas.model";
import axios, { AxiosResponse } from "axios";
import { urlPeliculas } from "./utils/endpoints";
import AlertaContext from "./utils/AlertaContext";

export default function LandingPage(){

    const [peliculas, setPeliculas] = useState<LandingPageDTO>({});

  useEffect(() => {
        
    cargarDatos();
    
  }, []);


  function cargarDatos(){
    axios.get(urlPeliculas)
    .then((respuesta: AxiosResponse<LandingPageDTO>) => {
      setPeliculas(respuesta.data);
    }) 
  }

    return(
        <>

       
        <AlertaContext.Provider value={() => cargarDatos()}>
        <h3>En Cartelera</h3>
        <ListaPeliculas peliculas={peliculas.enCines}/>
        <h3>Próximos Estrenos</h3>
        <ListaPeliculas peliculas={peliculas.proximosEstrenos}/>

        </AlertaContext.Provider>
        
        </>
    )
}


