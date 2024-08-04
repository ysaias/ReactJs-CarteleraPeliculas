import { Field, Form, Formik } from "formik";
import { generoDTO } from "../generos/generos.model";
import Button from "../utils/Button";



export default function FiltroPeliculas() {

    interface filtroPeliculasForm {
        titulo: string;
        generoId: number;
        proximosEstrenos: boolean;
        enCines: boolean;
    }

    const valorInicial: filtroPeliculasForm = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false

    }

    const generos: generoDTO[] = [
        { id: 1, nombre: "Accion" },
        { id: 2, nombre: "Comedia" }
    ]


    return (
        <>
            <h3>Filtro Peliculas</h3>

            <Formik initialValues={valorInicial}
                onSubmit={valores => console.log(valores)}
            >
                {(formikProps) => (
                    <Form >
                        <div className="row g-2">
                            <div className="col auto ">
                                <label htmlFor="titulo" className="form-label">Título</label>
                                <input type="text"
                                    className="form-control" id="titulo"
                                    placeholder="Título de la película"
                                    {...formikProps.getFieldProps('titulo')}
                                />
                            </div>
                            <div className="col auto ">
                                <label htmlFor="generoId" className="form-label">Género</label>
                                <select id="generoId" className="form-control"
                                    {...formikProps.getFieldProps('generoId')}
                                >
                                    <option value="0">--Seleccione un género--</option>
                                    {generos.map(genero => <option key={genero.id}
                                        value={genero.id}>{genero.nombre}</option>)}
                                </select>
                            </div>
                            <div className="col form-group mt-5 mx-sm-3 mb-2">
                                <Field className="form-check-input" id="proximosEstrenos"
                                    name="proximosEstrenos" type="checkbox" />
                                <label className="form-check-label"
                                    htmlFor="proximosEstrenos">Próximos Estrenos</label>
                            </div>
                            <div className=" col form-group mt-5 mx-sm-3 mb-2">
                                <Field className="form-check-input" id="enCines"
                                    name="enCines" type="checkbox" />
                                <label className="form-check-label"
                                    htmlFor="enCines">En Cines</label>
                            </div>
                            <div className="col d-grid gap-2 d-md-block mt-4">
                            <Button className="col btn btn-primary btn-sm m-2"
                                onClick={() => formikProps.submitForm()}>Filtrar</Button>
                            <Button className="col btn btn-danger btn-sm m-2"
                                onClick={() => formikProps.setValues(valorInicial)}>Limpiar</Button>
                                </div>
                        </div>

                    </Form>
                )}
            </Formik>

        </>
    )
}

