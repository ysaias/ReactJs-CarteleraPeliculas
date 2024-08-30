import { Formik, Form, Field } from "formik";
import { generoDTO } from "../generos/generos.model";
import Button from "../utils/Button";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlGeneros, urlPeliculas } from "../utils/endpoints";
import { peliculaDTO } from "./peliculas.model";
import ListadoPeliculas from "./ListadoPeliculas";
import { useLocation, useNavigate } from "react-router-dom";
import Paginacion from "../utils/Paginacion";

export default function FiltroPeliculas() {
    const valorInicial = useMemo(() => ({
      titulo: '',
      generoId: 0,
      proximosEstrenos: false,
      enCines: false,
      pagina: 1,
      recordsPorPagina: 3
    }), []);

    const [totalDePaginas, setTotalDePaginas] = useState(0);
    const [generos, setGeneros] = useState<generoDTO[]>([]);
    const [peliculas, setPeliculas] = useState<peliculaDTO[]>([]);
    const [filtros, setFiltros] = useState<filtroPeliculasForm>(valorInicial); // Nuevo estado para manejar los filtros
    const navigate = useNavigate();
    const location = useLocation();

  // Memoriza el objeto de parámetros de consulta
  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);

    useEffect(() => {
      axios.get(`${urlGeneros}/todos`)
        .then((respuesta: AxiosResponse<generoDTO[]>) => {
          setGeneros(respuesta.data);
        })
    }, [])


    const modificarURl = useCallback((valores: filtroPeliculasForm) =>{
      const queryStrings: string[] = [];
      if(valores.titulo){
        queryStrings.push(`titulo=${valores.titulo}`)
      }
      if(valores.generoId !== 0){
        queryStrings.push(`generoId=${valores.generoId}`)
      }
      if(valores.proximosEstrenos){
        queryStrings.push(`proximosEstrenos=${valores.proximosEstrenos}`)
      }
      if(valores.enCines){
        queryStrings.push(`enCines=${valores.enCines}`)
      }
      
        queryStrings.push(`pagina=${valores.pagina}`)
      navigate(`/peliculas/filtrar?${queryStrings.join('&')}`)
    }, [navigate])

    const buscarPeliculas = useCallback((valores: filtroPeliculasForm) => {
      modificarURl(valores);
      axios.get(`${urlPeliculas}/filtrar`, { params: valores })
        .then((respuesta: AxiosResponse<peliculaDTO[]>) => {
          const totalDeRegistros = 
          parseInt(respuesta.headers['cantidadtotalregistros'], 10);
          setTotalDePaginas(Math.ceil(totalDeRegistros / valorInicial.recordsPorPagina));

          setPeliculas(respuesta.data);
        }).catch(error => {
          console.error(error.response?.data); // Muestra detalles del error de respuesta
        });
    }, [modificarURl, valorInicial]);



    useEffect(() => {

      const nuevosFiltros = { ...valorInicial };

      if (query.get("titulo")) {
        nuevosFiltros.titulo = query.get("titulo")!;
      }
  
      if (query.get("generoId")) {
        nuevosFiltros.generoId = parseInt(query.get("generoId")!, 10);
      }
  
      if (query.get("proximosEstrenos")) {
        nuevosFiltros.proximosEstrenos = true;
      }
  
      if (query.get("enCines")) {
        nuevosFiltros.enCines = true;
      }
  
      if (query.get("pagina")) {
        nuevosFiltros.pagina = parseInt(query.get("pagina")!, 10);
      }
  
      setFiltros(nuevosFiltros); // Actualiza el estado con los filtros obtenidos de la URL
      buscarPeliculas(nuevosFiltros);

    }, [buscarPeliculas, valorInicial, query])


  return (
    <>
      <h3>Filtrar Peliculas</h3>
      <Formik
         initialValues={filtros} // Utilizamos los filtros actualizados
         enableReinitialize={true} // Para que Formik reinitialize los valores iniciales cuando cambian
        onSubmit={(valores) => { 

          valores.pagina = 1;
          buscarPeliculas(valores)

        }}
      >
        {(formikProps) => (
          <>
          <Form>
            <div className="form-inline">
              <div className="form-group mb-2">
                <label htmlFor="titulo" className="sr-only">
                  Título
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  placeholder="titulo de la película"
                  {...formikProps.getFieldProps("titulo")}
                />
              </div>
              <div className="form-group mx-sm-3 mb-2">
                <select
                  className="form-control"
                  {...formikProps.getFieldProps("generoId")}
                >
                  <option value="0">--Seleccione un Género</option>
                  {generos.map((genero) => (
                    <option key={genero.id} value={genero.id}>
                      {genero.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mx-sm-3 mb-2">
                <Field
                  className="form-check-input"
                  id="proximosEstrenos"
                  name="proximosEstrenos"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="proximosEstrenos">
                  Próximos Estrenos
                </label>
              </div>
              <div className="form-group mx-sm-3 mb-2">
                <Field
                  className="form-check-input"
                  id="enCines"
                  name="enCines"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="enCines">
                  En Cines
                </label>
              </div>
              <Button
                className="btn btn-primary mb-2 mx-sm-3"
                onClick={() => formikProps.submitForm()}
              >Filtrar</Button>
              <Button
                className="btn btn-danger mb-2"
                onClick={() => {
                  formikProps.setValues(valorInicial);
                  buscarPeliculas(valorInicial);
                }}
              >Limpiar</Button>

            </div>
           
          </Form>
           <ListadoPeliculas peliculas={peliculas} />
           <Paginacion cantidadTotalDePagina={totalDePaginas}
               paginaActual={formikProps.values.pagina} onChange={nuevaPagina => {
                  formikProps.values.pagina = nuevaPagina;
                  buscarPeliculas(formikProps.values);
               }}/>
           </>
        )}
      </Formik>
     

    </>
  );
}

interface filtroPeliculasForm {
  titulo: string;
  generoId: number;
  proximosEstrenos: boolean;
  enCines: boolean;
  pagina: number;
  recordsPorPagina: number;
}
