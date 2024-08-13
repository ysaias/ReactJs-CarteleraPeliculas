export interface pelicula {
  id: number;
  titulo: string;
  poster: string;
}

export interface peliculaCreacionDTO {
  titulo: string;
  enCines: boolean;
  trailer: string;
  fechaLanzamiento?: Date;
  poster?: File;
  posterURL?: string;
  generosIds?: number[];
  enCinesIds?: number[];
}

export interface landingPageDTO {
  enCartelera?: pelicula[];
  proximosEstrenos?: pelicula[];
}
