
import { useFormikContext } from 'formik';
import { coordenadaDTO } from './coordenadas.model';
import Mapa from './Mapa';

export default function MapaFormulario({ coordenadas, campoLat, campoLng }: mapaFormularioProps) {

    const { values } = useFormikContext<any>();

    function actualizarCampos(coordenadas: coordenadaDTO) {
        values[campoLat] = coordenadas.lat;
        values[campoLng] = coordenadas.lng;
    }

    return (
        <Mapa 
            coordenadas={coordenadas}
            manejarClickMapa={actualizarCampos}
           
        />
    )
}

interface mapaFormularioProps {
    coordenadas?: coordenadaDTO[]; // ahora es opcional por el valor por defecto
    campoLat: string;
    campoLng: string;
}
