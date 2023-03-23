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
