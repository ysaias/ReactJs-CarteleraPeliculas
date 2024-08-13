import FormularioCines from "./FormularioCines";

<<<<<<< HEAD
export default function EditarCines(){
    return(
        <>
        <h3>Editar Cines</h3>
        <FormularioCines 
            modelo={{nombre: 'Sambil', latitud: -17.855286, longitud: -63.220171 }}
            onSubmit={valores => console.log(valores)}
        />
        </>
    )
}
=======
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
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
