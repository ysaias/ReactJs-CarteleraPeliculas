import FormularioCines from "./FormularioCines";

<<<<<<< HEAD
export default function CrearCines(){
    return(
        <>
        <h3>Crear Cines</h3>
        <FormularioCines
            modelo={{nombre: ''}}
            onSubmit={valores => console.log(valores)}
        />
        </>
    )
}
=======
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
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
