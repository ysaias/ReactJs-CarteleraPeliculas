export default function MostrarErrores(props: mostrarerrorProps){

    const style = {color: 'red'}

    return(
        <>
            {props.errores ? <ul style={style}>
                {props.errores.map((error, indice) => <li key={indice}>{error}</li> )}
            </ul> : null}
        </>
    )
}

interface mostrarerrorProps{
    errores?: string[]; 
}