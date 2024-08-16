import { useEffect, useState } from "react";
import ListaPeliculas from "./peliculas/ListaPeliculas";
import { LandingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage(){

    const [peliculas, setPeliculas] = useState<LandingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas(
        {
          enCartelera:
          [
            {
              id: 1, titulo: 'Spider-Man: Far From Home', 
              poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg'
            },
            {
              id: 2, titulo: 'Moana', 
              poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX67_CR0,0,67,98_AL_.jpg'
            }
          ],
          proximosEstrenos:
          [
            {
              id: 3, titulo: 'Soul', 
              poster: 'https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UX67_CR0,0,67,98_AL_.jpg'
            },
            {
              id: 4, titulo: 'Zootrópolis', 
              poster: 'https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_UX67_CR0,0,67,98_AL_.jpg'
            }
          ]
      })

    }, 500);

    return () => clearTimeout(timerId);
  })


    return(
        <>
        <h3>En Cartelera</h3>
        <ListaPeliculas peliculas={peliculas.enCartelera}/>
        <h3>Próximos Estrenos</h3>
        <ListaPeliculas peliculas={peliculas.proximosEstrenos}/>
        </>
    )
}