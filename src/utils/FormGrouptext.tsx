import { ErrorMessage, Field } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupText(props: fromGroupTextProps) {
    return (
        <div className="form-group">
        {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null} 
        <Field id={props.campo} name={props.campo} className="form-control" 
        placeholder={props.placeholder} />
        <ErrorMessage name={props.campo}>{mensaje =>
            <MostrarErrorCampo mensaje={mensaje} />
        }</ErrorMessage>
    </div>
    )
}

interface fromGroupTextProps {
    campo: string;
    label?: string;
    placeholder?: string;
}