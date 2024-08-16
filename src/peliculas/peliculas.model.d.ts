import { actorPeliculaDTO } from "../actores/actores.model";

export interface Pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface peliculaCreacionDTO{
    titulo: string;
    enCines: boolean;
    trailer: string;
    fechaLanzamiento?: Date;
    poster?: File;
    posterUrl?: string;
    generosIds?: number[];
    cinesIds?: number[];
    actores?: actorPeliculaDTO[];
}

export interface LandingPageDTO{
    enCartelera?: Pelicula[];
    proximosEstrenos?: Pelicula[];
}

