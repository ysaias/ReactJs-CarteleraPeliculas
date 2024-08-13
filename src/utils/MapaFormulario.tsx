<<<<<<< HEAD
import { useFormikContext } from 'formik';
import { coordenadaDTO } from './coordenadas.model';
import Mapa from './Mapa';

export default function MapaFormulario({ coordenadas = [], campoLat, campoLng }: mapaFormularioProps) {

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
=======
import { useFormikContext } from "formik";
import { coordenadaDTO } from "./coordenadas.model";
import Mapa from "./Mapa";

export default function MapaFormulario(props: mapaFormularioProps) {
  const { values } = useFormikContext<any>();

  function actulizarCampos(coordenadas: coordenadaDTO) {
    values[props.campoLat] = coordenadas.lat;
    values[props.campoLng] = coordenadas.lng;
  }

  return (
    <Mapa coordenadas={props.coordenadas} manejarClickMapa={actulizarCampos} />
  );
}

interface mapaFormularioProps {
  coordenadas: coordenadaDTO[];
  campoLat: string;
  campoLng: string;
}

MapaFormulario.defaultProps = {
  coordenadas: [],
};
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
