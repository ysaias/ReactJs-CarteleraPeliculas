
import { Form, Formik, FormikHelpers } from "formik";
import { actorCreacionDTO } from "./actores.model";
import FromGroupText from "../utils/FormGrouptext";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import FomrGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import FormGroupMarkdown from "../utils/formGroupMarkdown";

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
