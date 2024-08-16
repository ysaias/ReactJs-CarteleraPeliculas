import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas() {
  const generosNoSeleccionados: generoDTO[] = [{ id: 2, nombre: "Drama" }];

  const generosSeleccionados: generoDTO[] = [
    { id: 1, nombre: "Accion" },
    { id: 3, nombre: "Comedia" },
  ];

  const cinesSeleccionados: cineDTO[] = [{ id: 1, nombre: "Agora" }];

  const cinesNoSeleccionados: cineDTO[] = [{ id: 2, nombre: "Sambil" }];

  return (
    <>
      <h3>Editar Peliculas</h3>

      <FormularioPeliculas
        cinesSeleccionados={cinesSeleccionados}
        cinesNoSeleccionados={cinesNoSeleccionados}
        generosNoSeleccionados={generosNoSeleccionados}
        generosSeleccionados={generosSeleccionados}
        modelo={{
          titulo: "Spider-Man",
          enCines: true,
          trailer: "url",
          fechaLanzamiento: new Date("2019-01-01T00:00:00"),
        }}
        onSubmit={(valores) => console.log(valores)}
      />
    </>
  );
}
