import { ReactElement } from "react";
import Cargando from "./Cargando";

<<<<<<< HEAD
export default function ListadoGenerico(props: listadoGenericoProps) {

    if (!props.listado) {

        if (props.cargandoUI) {
            return props.cargandoUI;
        }
        return <Cargando />

    } else if (props.listado.length === 0) {

        if (props.listadoVacioUI) {
            return props.listadoVacioUI;
        }
        return <>No hay elementos para mostrar</>

    } else {
        return props.children;
    }

}

interface listadoGenericoProps {
=======
export default function ListadoGenerico(props: listadoGenericoProps){
    if (!props.listado){
        if(props.cargandoUI){
            return props.cargandoUI;
        }
        return <Cargando />
    } else if(props.listado.length === 0){
        if(props.listadoVacioUI){
            return props.listadoVacioUI;
        }
        return <>No hay elementos para mostrar</>
    } else{
        return props.children;
    }
}

interface listadoGenericoProps{
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
    listado: any;
    children: ReactElement;
    cargandoUI?: ReactElement;
    listadoVacioUI?: ReactElement;
<<<<<<< HEAD
=======

>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
}