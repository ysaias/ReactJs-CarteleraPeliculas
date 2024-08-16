
import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../utils/Button";
import FromGroupText from "../utils/FormGrouptext";
import { generoCreacionDTO } from "./generos.model";

export default function FormularioGeneros(props: fomularioGeneroProps) {
    return (
        <>
            <Formik initialValues={props.modelo}
                onSubmit={props.onSubmit}

                validationSchema={Yup.object({
                    nombre: Yup.string().required('Este Campo es requerido')
                    .max(50, 'La longitud máxima es de 50 caracteres')
                    .primeraLetraMayuscula()
                })}

            >
                {(formikProps) => (

                    <Form>
                        <FromGroupText campo="nombre" label="Nombre" placeholder="Nombre Género" />

                        <Button disabled={formikProps.isSubmitting} type="submit" >Salvar</Button>
                        <Link className="btn btn-secondary" to="/generos">Cancelar</Link>

                    </Form>
                )}




            </Formik>
        </>
    )
}

interface fomularioGeneroProps{
    modelo: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}

