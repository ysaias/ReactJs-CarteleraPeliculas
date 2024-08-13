<<<<<<< HEAD
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { coordenadaDTO } from './coordenadas.model';
import { useState } from "react";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapa({ height = '500px', coordenadas = [], manejarClickMapa }: mapaProps) {
    const [coordenadasState, setCoordenadas] = useState<coordenadaDTO[]>(coordenadas);

    return (
        <MapContainer
            center={[-17.854816, -63.220568]} zoom={14}
            style={{ height }}
        >
            <TileLayer attribution="React Películas"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ClickMapa setPunto={coordenadas => {
                setCoordenadas([coordenadas]);
                manejarClickMapa(coordenadas);
            }} />
            {coordenadasState.map(coordenada => <Marcador key={coordenada.lat + coordenada.lng}
              {...coordenada}
            />)}
        </MapContainer>
    );
}

interface mapaProps {
    height?: string; // ahora es opcional por el valor por defecto
    coordenadas?: coordenadaDTO[]; // ahora es opcional por el valor por defecto
    manejarClickMapa(coordenadas: coordenadaDTO): void;
}

function ClickMapa({ setPunto }: clickMapaProps) {
    useMapEvent('click', e => {
        setPunto({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
    return null;
}

interface clickMapaProps {
    setPunto(coordenadas: coordenadaDTO): void;
}

function Marcador(props: coordenadaDTO) {
    return (
        <Marker position={[props.lat, props.lng]} />
    );
}
=======
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { coordenadaDTO } from "./coordenadas.model";
import { useState } from "react";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Mapa(props: mapaProps) {
  const [coordenadas, setCoordenadas] = useState<coordenadaDTO[]>(
    props.coordenadas
  );

  return (
    <MapContainer
      center={[-17.769224, -63.182899]}
      zoom={14}
      style={{ height: props.height }}
    >
      <TileLayer
        attribution="React Peliculas"
        url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"}
      />
      <ClickMapa
        setPunto={(coordenadas) => {
          setCoordenadas([coordenadas]);
          props.manejarClickMapa(coordenadas);
        }}
      />
      {coordenadas.map((coordenada) => (
        <Marcador key={coordenada.lat + coordenada.lng} {...coordenada} />
      ))}
    </MapContainer>
  );
}

function ClickMapa(props: clickMapaProps) {
  useMapEvent("click", (e) => {
    props.setPunto({ lat: e.latlng.lat, lng: e.latlng.lng });
  });
  return null;
}

interface clickMapaProps {
  setPunto(coordenadas: coordenadaDTO): void;
}

function Marcador(props: coordenadaDTO) {
  return <Marker position={[props.lat, props.lng]} />;
}
interface mapaProps {
  height: string;
  coordenadas: coordenadaDTO[];
  manejarClickMapa(coordenadas: coordenadaDTO): void;
}

Mapa.defaultProps = {
  height: "500px",
};
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
