import { ReactElement, useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import confirmar from "./Confirmar";
import Paginacion from "./Paginacion";
import ListadoGenerico from "./ListadoGenerico";

export default function IndiceEntidad<T>(props: indiceEntidadProps<T>) {

    const [entidades, setEntidades] = useState<T[]>();
    const [totalDePaginas, setTotalDePaginas] = useState(0);
    const [recordsPorPaginas, setRecordsPorPaginas] = useState(10);
    const [pagina, setPagina] = useState(1);

    useEffect(() => {

        cargarDatos();

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pagina, recordsPorPaginas])

    function cargarDatos() {
        axios.get(props.url, {
            params: { pagina: pagina, recordsPorPagina: recordsPorPaginas }
        }).then((respuesta: AxiosResponse<T[]>) => {
            const totalDeRegistros = parseInt(respuesta.headers['cantidadtotalregistros'], 10);
            setTotalDePaginas(Math.ceil(totalDeRegistros / recordsPorPaginas));
            setEntidades(respuesta.data);

        })
    }

    async function borrar(id: number) {
        try {
            await axios.delete(`${props.url}/${id}`)
            cargarDatos();
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const botones = (urlEditar: string, id: number) => <>
        <Link className="btn btn-success" to={urlEditar}>
            Editar
        </Link>
        <Button
            onClick={() => confirmar(() => borrar(id))}
            className="btn btn-danger">Borrar</Button>
    </>

    return (

        <>
            <h3>{props.titulo}</h3>
            {props.urlCrear ?  <Link className="btn btn-primary" to={props.urlCrear}>Crear {props.nombreEntidad}</Link> : null}

            <div className="form-group" style={{ width: '150px' }}>
                <label >Registro por página:</label>
                <select className="form-control"
                    defaultValue={10}
                    onChange={e => {
                        setPagina(1);
                        setRecordsPorPaginas(parseInt(e.currentTarget.value, 10));
                    }}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                </select>
            </div>

            <Paginacion cantidadTotalDePagina={totalDePaginas}
                paginaActual={pagina} onChange={nuevaPagina => setPagina(nuevaPagina)}

            />

            <ListadoGenerico listado={entidades} >
                <table className="table table-stripe">
                    {props.children(entidades!, botones)}
                </table>
            </ListadoGenerico>


        </>
    )

}



interface indiceEntidadProps<T> {
    url: string;
    urlCrear?: string;
    children(entidades: T[], botones: (urlEditar: string, id: number) => ReactElement): ReactElement;
    titulo: string;
    nombreEntidad?: string;
}