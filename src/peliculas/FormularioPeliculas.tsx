import { Form, Formik, FormikHelpers } from "formik";
import { peliculaCreacionDTO } from "./peliculas.model";
import * as Yup from "yup";
import FormGrouptext from "../utils/FromGroupText";
import FormGroupCheckbox from "../utils/FormGroupCheckbox";
import FormGroupFecha from "../utils/FromGroupFecha";
import FormGroupImage from "../utils/FormGroupImage";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import SelectorMultiple, {
  selectorMultipleModel,
} from "../utils/SelectorMultiple";
import { generoDTO } from "../generos/generos.model";
import { useState } from "react";
import { cineDTO } from "../cines/cines.model";

export default function FormularioPeliculas(props: formularioPeliculasProps) {
  const [generosSeleccionados, setGenerosSeleccionados] = useState(
    mapear(props.generosSeleccionados)
  );
  const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState(
    mapear(props.generosNoSeleccionados)
  );

  const [cinesSeleccionados, setCinesSeleccionados] = useState(
    mapear(props.cinesSeleccionados)
  );

  const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState(
    mapear(props.cinesNoSeleccionados)
  );

  function mapear(
    arreglo: { id: number; nombre: string }[]
  ): selectorMultipleModel[] {
    return arreglo.map((valor) => {
      return { llave: valor.id, valor: valor.nombre };
    });
  }
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={(valores, acciones) => {
        valores.generosIds = generosNoSeleccionados.map((valor) => valor.llave);
        valores.cinesIds = cinesSeleccionados.map((valor) => valor.llave);
        props.onSubmit(valores, acciones);
      }}
      validationSchema={Yup.object({
        titulo: Yup.string()
          .required("Este campo es Requerido")
          .primeraLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGrouptext label="Titulo" campo="titulo" />
          <FormGroupCheckbox label="En Cines" campo="enCines" />
          <FormGrouptext label="Trailer" campo="trailer" />
          <FormGroupFecha campo="fechaLanzamiento" label="Fecha Lanzamiento" />
          <FormGroupImage
            campo="poster"
            label="Poster"
            imagenURL={props.modelo.posterUrl}
          />

          <div className="form-group">
            <label>Genero:</label>
            <SelectorMultiple
              seleccionados={generosSeleccionados}
              noSeleccionados={generosNoSeleccionados}
              onChange={(seleccionados, noSeleccionados) => {
                setGenerosSeleccionados(seleccionados);
                setGenerosNoSeleccionados(noSeleccionados);
              }}
            />
          </div>

          <div className="form-group">
            <label>Cines:</label>
            <SelectorMultiple
              seleccionados={cinesSeleccionados}
              noSeleccionados={cinesNoSeleccionados}
              onChange={(seleccionados, noSeleccionados) => {
                setCinesSeleccionados(seleccionados);
                setCinesNoSeleccionados(noSeleccionados);
              }}
            />
          </div>

          <Button disabled={formikProps.isSubmitting} type="submit">
            Enviar
          </Button>
          <Link className="btn btn-secondary" to="/">
            Cancelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface formularioPeliculasProps {
  modelo: peliculaCreacionDTO;
  onSubmit(
    valores: peliculaCreacionDTO,
    acciones: FormikHelpers<peliculaCreacionDTO>
  ): void;
  generosSeleccionados: generoDTO[];
  generosNoSeleccionados: generoDTO[];
  cinesSeleccionados: cineDTO[];
  cinesNoSeleccionados: cineDTO[];
}
