export default function MostrarErrorCampo(props: mostrarErrorCampo) {
  return <div className="text-danger">{props.mensaje}</div>;
}

interface mostrarErrorCampo {
  mensaje: string;
}
