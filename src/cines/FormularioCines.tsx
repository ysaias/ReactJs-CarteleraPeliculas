import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { coordenadaDTO } from "../utils/coordenadas.model";
import { cineCreacionDTO } from "./cines.model";
import FormGroupText from "../utils/FromGroupText";
import MapaFormulario from "../utils/MapaFormulario";
import Button from "../utils/Button";

export default function FormularioCines({ modelo, onSubmit }: formularioCinesProps) {

    function transformarCoordenada(): coordenadaDTO[] | undefined {
        if (modelo.latitud && modelo.longitud) {
            const respuesta: coordenadaDTO = {
                lat: modelo.latitud,
                lng: modelo.longitud
            }
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
                    <div className="mb-4">
                        <FormGroupText label="Nombre" campo="nombre" />
                    </div>
                    <div style={{ margin: '1rem' }}>
                        <MapaFormulario coordenadas={transformarCoordenada()} 
                        campoLat="latitud" campoLng="longitud" />
                            
                          
                    </div>

                    <Button disabled={formikProps.isSubmitting}
                        type="submit">Salvar</Button>
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
