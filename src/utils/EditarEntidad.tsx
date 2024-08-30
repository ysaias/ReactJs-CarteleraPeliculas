import axios, { AxiosResponse } from "axios";
import { ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cargando from "./Cargando";
import MostrarErrores from "./MostrarErrores";

export default function EditarEntidad<TCreacion, TLectura>({
    url,
    urlIndice,
    nombreEntidad,
    children,
    transformar = (entidad: any) => entidad,
    transformarFormData
}: entidadProps<TCreacion, TLectura>) {

    const { id }: any = useParams();
    const [entidad, setEntidad] = useState<TCreacion>();
    const [errores, setErrores] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${url}/${id}`)
            .then((respuesta: AxiosResponse<TLectura>) => {
                setEntidad(transformar(respuesta.data));
            })

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function Editar(entidadEditar: TCreacion) {
        try {

            if (transformarFormData) {
                const formData = transformarFormData(entidadEditar);
                await axios({
                    method: 'put',
                    url: `${url}/${id}`,
                    data: formData,
                    headers: { 'Content-Type': 'multipart/form-data' }
                })

            } else {

                await axios.put(`${url}/${id}`, entidadEditar);

            }

            navigate(urlIndice);

        } catch (error) {
            setErrores(error.response.data);
        }

    }

    return (
        <>

            <h3>Editar {nombreEntidad}</h3>
            <MostrarErrores errores={errores} />
            {entidad ? children(entidad, Editar) : <Cargando />}
        </>
    )


}

interface entidadProps<TCreacion, TLectura> {
    url: string;
    urlIndice: string;
    nombreEntidad: string;
    children(entidad: TCreacion, editar: (entidad: TCreacion) => void): ReactElement;
    transformar?(entidad: TLectura): TCreacion;
    transformarFormData?(mpdelo: TCreacion): FormData;
}