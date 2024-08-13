//import { useParams } from "react-router-dom"
import FomularioGeneros from "./FormularioGeneros";

export default function EditarGenero() {
  //const { id }: any = useParams();

  return (
    <>
      <h3>Editar Genero</h3>
      <FomularioGeneros
        modelo={{ nombre: "Acción" }}
        onSubmit={async (valores, accion) => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(valores);
        }}
      />
    </>
  );
}
