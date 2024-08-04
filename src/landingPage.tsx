import { useEffect, useState } from "react";
import { LandingPageDTP } from "./peliculas/peliculas.model";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";

export default function LandingPage() {

    const [peliculas, setPeliculas] = useState<LandingPageDTP>();

    useEffect(() => {

        const timerID = setTimeout(() => {


            setPeliculas({

                enCartelera: [
                    {
                        id: 1, titulo: 'Spider-Man: Far from Home',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX228_.jpg'

                    },
                    {
                        id: 2, titulo: 'Moana: Vaiana',
                        poster: 'https://m.media-amazon.com/images/M/MV5BNGZiZjE2MWEtZjg4Ny00YmZiLWJhZjMtNjg5YzgwY2JmYjQ1XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UX1230_.jpg'

                    },
                    {
                        id: 3, titulo: 'Big Hero: 6',
                        poster: 'https://m.media-amazon.com/images/M/MV5BOTcwM2Q1OGYtNmEzNy00NDliLWEzMWMtNDhmMzI1YTQyMDI3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_QL75_UX1230_.jpg'

                    }
                ],
                proximosEstrenos: [
                    {
                        id: 1, titulo: 'Deadpool y Lobezno: 25 jul 2024',
                        poster: 'https://m.media-amazon.com/images/M/MV5BNjUzNzMzZjQtNDAwYi00ZjFjLWIzMjgtZDliYWRjMDc4YWRjXkEyXkFqcGc@._V1_QL75_UX1230_.jpg'

                    },
                    {
                        id: 2, titulo: 'Carmen: 02 ago 2024',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMDcyZTViMWItYjAxNi00ZTMyLWI3MzQtN2Y2NmM4YThhZDY3XkEyXkFqcGdeQXVyMTYyNjE5MjM2._V1_QL75_UX1230_.jpg'

                    },
                    {
                        id: 3, titulo: 'Borderlands: 09 ago 2024',
                        poster: 'https://m.media-amazon.com/images/M/MV5BZDlhYWIxY2UtNzc4NS00N2RlLTk5NWItYmNhZjhiZjA5ZTY1XkEyXkFqcGc@._V1_QL75_UX1230_.jpg'

                    }
                ]
            }) //termina setPeliculas

        }, 2000); // termina setTimeout

        return () => clearTimeout(timerID);

    }) // termina useEffect



    return (

        <>
            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas?.enCartelera} />
            <h3>Próximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas?.proximosEstrenos} />
        </>

    )
}