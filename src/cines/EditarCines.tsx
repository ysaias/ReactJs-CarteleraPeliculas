import FormularioCines from "./FormularioCines";

export default function EditarCines() {
  return (
    <>
      <h3>Editar Cines</h3>
      <FormularioCines
        modelo={{ nombre: "Sambil", latitud: 0, longitud: 0 }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
}
