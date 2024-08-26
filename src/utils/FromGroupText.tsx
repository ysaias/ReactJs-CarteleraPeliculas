import { Field, ErrorMessage } from "formik";
import React from "react";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupText({
  autoComplete,
  campo,
  label,
  placeholder,
  type = 'text'  // Valor por defecto para type
}: FormGroupTextProps) {
  return (
    <div className="form-group">
      {label ? <label htmlFor={campo}>{label}</label> : null}
      <Field 
        autoComplete={autoComplete}
        id={campo} 
        name={campo} 
        className="form-control" 
        placeholder={placeholder}
        type={type}  // Usando el valor de type, que por defecto es 'text'
      />
      <ErrorMessage name={campo}>
        {mensaje => <MostrarErrorCampo mensaje={mensaje} />}
      </ErrorMessage>
    </div>
  );
}

interface FormGroupTextProps {
  campo: string;
  label?: string;
  placeholder?: string; 
  type?: 'text' | 'password';  // type es opcional ahora
  autoComplete?: string; 
}
