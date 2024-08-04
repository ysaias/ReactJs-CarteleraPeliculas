import { Typeahead } from "react-bootstrap-typeahead";
import { actorPeliculaDTO } from "./actores.model";
import { ReactElement, useState } from "react";

export default function TypeAheadActores({
    actores = [],
    onAdd,
    listadoUI,
    onRemove
}: typeAheadActoresProps) {

    const [elementoArrastrado, setElementoArrastrado] = useState<actorPeliculaDTO | undefined>(undefined)
    
    const actoresOpciones: actorPeliculaDTO[] =  [
        {
            id: 1, nombre: "Tom Holland",
            personaje: "", 
            foto: 'https://m.media-amazon.com/images/M/MV5BZGU4MWE0N2QtODEwNC00MjkyLTlmMWMtMzNjNmZjZDc3NDE3XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_QL75_UX1230_.jpg'
        },
        {
            id: 2, nombre: "Javier Bardem", 
            personaje: "", foto: 'https://m.media-amazon.com/images/M/MV5BMTc4MDczMjkyNl5BMl5BanBnXkFtZTcwNzczODI3OA@@._V1_QL75_UX1230_.jpg    '
        },
        {
            id: 3, nombre: "Lucia Oskerova", personaje: "", foto: 'https://m.media-amazon.com/images/M/MV5BMTU1MTc0MTE5Nl5BMl5BanBnXkFtZTcwNTkyNTUxNA@@._V1_QL75_UX642_.jpg'
        }
    ];

    function manejarDragStart(actor: actorPeliculaDTO) {
        setElementoArrastrado(actor);
    }

    function manejarDragOver(actor: actorPeliculaDTO) {
        if (!elementoArrastrado) {
            return;
        }

        if (actor.id !== elementoArrastrado.id) {
            const elementoArrastradoIndice = actores.findIndex(x => x.id === elementoArrastrado.id);
            const actorIndice = actores.findIndex(x => x.id === actor.id);

            const nuevosActores = [...actores];
            nuevosActores[actorIndice] = elementoArrastrado;
            nuevosActores[elementoArrastradoIndice] = actor;
            onAdd(nuevosActores);
        }
    }

    return (
        <>
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={nuevosActores => {
                    if (actores.findIndex(x => x.id === nuevosActores[0].id) === -1) {
                        onAdd([...actores, nuevosActores[0]]);
                    }
                }}
                labelKey={actor => actor.nombre}
                options={actoresOpciones}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
                selected={[]}
                renderMenuItemChildren={(actor) => (
                    <>
                        <img alt="imagen actor" src={actor.foto}
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px'
                            }}
                        />
                        <span>{actor.nombre}</span>
                    </>
                )}
            />

            <ul className="list-group">
                {actores.map(actor =>
                    <li
                        draggable={true}
                        onDragStart={() => manejarDragStart(actor)}
                        onDragOver={() => manejarDragOver(actor)}
                        className="list-group-item list-group-item-action"
                        key={actor.id}>
                        {listadoUI(actor)}
                        <span className="badge badge-secondary badge-pill pointer"
                            style={{ marginLeft: '1rem', color: "black" }}
                            onClick={() => onRemove(actor)}
                        >
                            X
                        </span>
                    </li>
                )}
            </ul>
        </>
    );
}

interface typeAheadActoresProps {
    actores?: actorPeliculaDTO[]; // Marcamos la propiedad como opcional
    onAdd(actores: actorPeliculaDTO[]): void;
    listadoUI(actor: actorPeliculaDTO): ReactElement;
    onRemove(actor: actorPeliculaDTO): void;
}
