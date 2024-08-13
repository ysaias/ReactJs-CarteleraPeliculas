import { Form, Formik, FormikHelpers } from "formik";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { coordenadaDTO } from "../utils/coordenadas.model";
import { cineCreacionDTO } from "./cines.model";
import FormGroupText from "../utils/FormGrouptext";
import MapaFormulario from "../utils/MapaFormulario";
import Button from "../utils/Button";

export default function FormularioCines({modelo, onSubmit}: formularioCinesProps) {

    function transformarCoordenada(): coordenadaDTO[] | undefined {
        if (modelo.latitud && modelo.longitud){
            const respuesta: coordenadaDTO = {lat: modelo.latitud, 
                lng: modelo.longitud}
            return [respuesta];
        }

        return undefined;
    }

    return (
        <Formik
            initialValues={modelo}
            onSubmit={onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText label="Nombre" campo="nombre" />

                    <div style={{marginBottom: '1rem'}}>
                        <MapaFormulario campoLat="latitud" campoLng="longitud"
                            coordenadas={transformarCoordenada()}
                        />
                    </div>

                    <Button disabled={formikProps.isSubmitting} type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/cines">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioCinesProps {
    modelo: cineCreacionDTO;
    onSubmit(valores: cineCreacionDTO, acciones: FormikHelpers<cineCreacionDTO>): void;
}
=======
import { report } from "process";
import { cineCreacionDTO } from "./cines.model";
import * as Yup from "yup";
import FormGrouptext from "../utils/FromGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import MapaFormulario from "../utils/MapaFormulario";
import { coordenadaDTO } from "../utils/coordenadas.model";

export default function FormularioCines(props: formularioCinesProps) {
  function transformarCoordenada(): coordenadaDTO[] | undefined {
    if (props.modelo.latitud && props.modelo.longitud) {
      const respuesta: coordenadaDTO = {
        lat: props.modelo.latitud,
        lng: props.modelo.longitud,
      };
      return [respuesta];
    }
    return undefined;
  }

  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este es un campo requerido")
          .primeraLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGrouptext label="nombre" campo="nombre" />

          <div style={{ marginBottom: "1rem" }}>
            <MapaFormulario
              campoLat="latitud"
              campoLng="longitud"
              coordenadas={transformarCoordenada()}
            />
          </div>

          <Button disabled={formikProps.isSubmitting} type="submit">
            Salvar
          </Button>
          <Link className="btn btn-secondary" to="/cines">
            Cacelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface formularioCinesProps {
  modelo: cineCreacionDTO;
  onSubmit(
    valores: cineCreacionDTO,
    acciones: FormikHelpers<cineCreacionDTO>
  ): void;
}
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
