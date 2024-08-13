<<<<<<< HEAD
import FormulaioActores from "./FormularioActores";

export default function EditarActores(){
    return(
        <><h3>Editar Actores</h3>
        <FormulaioActores 
        modelo={{nombre: 'Ton Holland', 
            fechaNacimiento: new Date('1983-04-08T00:00:00'),
            fotoUrl: 'https://m.media-amazon.com/images/M/MV5BMjNjNWY4MGUtZThkNS00Zjk4LWExMjEtMjdlM2NhNjk5ZGNiXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_QL75_UX276_.jpg'
        }}
            onSubmit={valores => console.log(valores)}
         />
        </>
    )
}
=======
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
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
