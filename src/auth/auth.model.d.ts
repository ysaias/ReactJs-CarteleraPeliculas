export interface claim{
    nombre: string;
    valor: string;
}


export interface credencialesUsuario{
    email: string;
    password: string;
}

export interface respuestaAutentificacion{
    token: string;
    expiracion: Date;
}   