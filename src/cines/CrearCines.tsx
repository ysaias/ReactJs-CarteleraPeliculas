import FormularioCines from "./FormularioCines";

export default function CrearCines() {
  return (
    <>
      <h3>Crear Cines</h3>
      <FormularioCines
        modelo={{ nombre: "Sambil" }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
}
