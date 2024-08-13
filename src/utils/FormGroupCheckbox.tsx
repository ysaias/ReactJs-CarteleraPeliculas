import { Field } from "formik";

<<<<<<< HEAD
export default function FormGroupCheckbox(props: formGroupCheckbosProps){
    return(
        <div className="form-group form-check">
            <Field className="form-check-input" id={props.campo} name={props.campo} type="checkbox"/>
            <label htmlFor={props.campo}>{props.label}</label>
        </div>
    )
}

interface formGroupCheckbosProps{
    label: string;
    campo: string;
} 
=======
export default function FormGroupCheckbox(props: formGroupCheckbox) {
  return (
    <div className="form-group form-check">
      <Field
        className="form-check-input"
        id={props.campo}
        name={props.campo}
        type="checkbox"
      />
      <label htmlFor={props.campo}>{props.label}</label>
    </div>
  );
}

interface formGroupCheckbox {
  label: string;
  campo: string;
}
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
