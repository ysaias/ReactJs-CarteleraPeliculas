import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

export default function FormGroupImage(props: formGroupImageProps) {
  const divStyle = { marginTop: "10px" };
  const imgStyle = { width: "450px" };

  const [imageBase64, setImageBase64] = useState("");
  const [imagenURL, setImagenURL] = useState(props.imagenURL);
  const { values } = useFormikContext<any>();

  const ManejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const archivo = e.currentTarget.files[0];
      aBase64(archivo)
        .then((representacionBase64: string) =>
          setImageBase64(representacionBase64)
        )
        .catch((error) => console.error(error));

      values[props.campo] = archivo;
      setImagenURL("");
    }
  };

  const aBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <div>
        <input
          type="file"
          accept=".jpg, jpeg, .png"
          onChange={ManejarOnChange}
        />
      </div>
      {imageBase64 ? (
        <div style={divStyle}>
          <img style={imgStyle} src={imageBase64} alt="imagen seleccionada" />
        </div>
      ) : null}
      {imagenURL ? (
        <div style={divStyle}>
          <img style={imgStyle} src={imagenURL} alt="imagen seleccionada" />
        </div>
      ) : null}
    </div>
  );
}

interface formGroupImageProps {
  campo: string;
  label: string;
  imagenURL: string;
}

FormGroupImage.defaultProps = {
  imagenURL: "",
};
