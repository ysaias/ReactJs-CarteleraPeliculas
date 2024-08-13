<<<<<<< HEAD
export default function MostrarErrorCampo(props: mostrarErrorCampoProps){
    return(
        <div className="text-danger">{props.mensaje}</div>
    )
}

interface mostrarErrorCampoProps{
    mensaje: string;
}
=======
export default function MostrarErrorCampo(props: mostrarErrorCampo) {
  return <div className="text-danger">{props.mensaje}</div>;
}

interface mostrarErrorCampo {
  mensaje: string;
}
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
