import { useFormikContext, Field } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupFecha(props: FormGroupFechaProps) {
    const { validateForm, errors, touched } = useFormikContext<any>();

    return (
        <div className="form-group">
            <label htmlFor={props.campo}>{props.label}</label>

            <Field 
                type="date"
                className="form-control"
                id={props.campo}
                name={props.campo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const fecha = new Date(e.currentTarget.value + 'T00:00:00');
                    e.currentTarget.value = fecha.toISOString().split('T')[0]; // Actualizar el valor del campo a la fecha en formato ISO.
                    validateForm();
                }}
            />

            {touched[props.campo] && errors[props.campo] ? (
                <MostrarErrorCampo mensaje={errors[props.campo]?.toString()!} />
            ) : null}
        </div>
    );
}

interface FormGroupFechaProps {
    campo: string;
    label: string;
}
