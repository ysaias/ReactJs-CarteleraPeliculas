<<<<<<< HEAD
import FormulaioActores from "./FormularioActores";

export default function CrearActores(){
    return(
        <><h3>Crear Actores</h3>
        <FormulaioActores modelo={{nombre: '', fechaNacimiento: undefined}}
            onSubmit={valores => console.log(valores)}
         />
        </>
    )
}
=======
import FormularioActores from "./FormularioActores";

export default function CrearActores() {
  return (
    <>
      <h3>Crear Actores</h3>
      <FormularioActores
        modelo={{ nombre: "", fechaNacimiento: undefined }}
        onSubmit={async (valores) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(valores);
        }}
      />
    </>
  );
}
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
