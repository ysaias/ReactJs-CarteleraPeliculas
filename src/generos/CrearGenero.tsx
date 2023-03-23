import FomularioGeneros from "./FormularioGeneros";

export default function CrearGenero() {
  //const history = useHistory();

  return (
    <>
      <h3>Crear Genero</h3>

      <FomularioGeneros
        modelo={{ nombre: "" }}
        onSubmit={async (valores) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(valores);
        }}
      />
    </>
  );
}
