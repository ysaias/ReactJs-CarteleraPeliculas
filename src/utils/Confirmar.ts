import Swa1 from 'sweetalert2';

export default function confirmar(
    onConFirm: any,
    titulo: string = "¿Deseas borrar el registro?",
    textoBotonConfirmacion: string = "Borrar"
){
    Swa1.fire({
        title: titulo,
        confirmButtonText: textoBotonConfirmacion,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
    }).then(result => {
        if(result.isConfirmed){
            onConFirm();
        }
    })
}