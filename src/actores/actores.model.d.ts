export interface actorCreacionDTO{
    nombre: string;
    fechaNacimiento?: Date;
    foto?: File;
    fotoUrl?: string;
    biografia?: string;

}

export interface actorPeliculaDTO{
    id: number;
    nombre: string;
    personaje: string;
    foto: string;
    fotoURL?: string;
    biografia?: string;

}