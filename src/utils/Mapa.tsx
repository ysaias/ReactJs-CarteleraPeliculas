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
