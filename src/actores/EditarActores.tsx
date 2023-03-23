import FormularioActores from "./FormularioActores";

export default function EditarActores() {
  return (
    <>
      <h3>Editar Actores</h3>
      <FormularioActores
        modelo={{
          nombre: "Tom Holland",
          biografia: `# tom
Ha nacido **tom**`,
          fechaNacimiento: new Date("1996-06-01T00:00:00"),
          fotoURL:
            "https://m.media-amazon.com/images/M/MV5BZGU4MWE0N2QtODEwNC00MjkyLTlmMWMtMzNjNmZjZDc3NDE3XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY100_CR25,0,100,100_AL_.jpg",
        }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
}
