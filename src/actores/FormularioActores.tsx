<<<<<<< HEAD
import { Form, Formik, FormikHelpers } from "formik";
import { actorCreacionDTO } from "./actores.model";
import FromGroupText from "../utils/FormGrouptext";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import FomrGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import FormGroupMarkdown from "../utils/FormGroupMarkdown";

export default function FormulaioActores({
    modelo,
    onSubmit
}: formulaioActoresProps){
    return(
        <Formik
            initialValues={modelo}
            onSubmit={onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
                fechaNacimiento: Yup.date().nullable().required('Este campo es requerido')
            })}
        >
            {(formikProps) => (
                <Form >
                    <div className="row g-2">
                    <div className="col">   
                    <FromGroupText campo="nombre" label="Nombre" />
                    </div>
                    <div className="col">  
                    <FomrGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento" />
                    </div>
                    <FormGroupImagen campo="foto" label="Foto" imagenUrl={modelo.fotoUrl} />
                    </div>
                    <FormGroupMarkdown campo="biografia" label="Biografia"/>
                    <Button disabled={formikProps.isSubmitting}
                        type="submit"
                    >Salvar</Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                </Form>
            ) }

        </Formik>
    )
}

interface formulaioActoresProps{
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void;
}
=======
import { Formik, FormikHelpers, Form } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGrouptext from "../utils/FromGroupText";
import { actorCreacionDTO } from "./actores.model";
import * as Yup from "yup";
import FormGroupFecha from "../utils/FromGroupFecha";
import FormGroupImage from "../utils/FormGroupImage";
import FormGroupMarkdown from "../utils/formGroupMarkdown";

export default function FormularioActores(props: formularioActoresProps) {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este Campo es requerido")
          .primeraLetraMayuscula(),
        fechaNacimiento: Yup.date()
          .nullable()
          .required("Este campo es requirido"),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGrouptext campo="nombre" label="Nombre" />
          <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento" />
          <FormGroupImage
            campo="foto"
            label="foto"
            imagenURL={props.modelo.fotoURL}
          />
          <FormGroupMarkdown campo="biografia" label="Biografia" />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Salvar
          </Button>
          <Link className="btn btn-secondary" to="/actores">
            Cancelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface formularioActoresProps {
  modelo: actorCreacionDTO;
  onSubmit(
    valores: actorCreacionDTO,
    acciones: FormikHelpers<actorCreacionDTO>
  ): void;
}
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
