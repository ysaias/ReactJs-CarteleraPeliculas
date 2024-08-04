import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

export default function FormGroupImagen({ campo, label, imagenUrl = '' }: formGroupImagenProps){

    const divStyle = { marginTop: '10px' }
    const imgStyle = { width: '450px' }
    
    const [imagenBase64, setImagenBase64] = useState('');
    const [imagenUrlState, setImagenUrlState] = useState(imagenUrl);
    const { values } = useFormikContext<any>();

    const ManejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.files){
            const archivo = e.currentTarget.files[0];
            aBase64(archivo)
            .then((representacionBase64: string) => setImagenBase64(representacionBase64))
            .catch(error => console.error(error))

            values[campo] = archivo;
            setImagenUrlState('');
        }
    }

    const aBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }
    
    return(
        <div>
            <label htmlFor="file">{label}</label>
            <div>
                <input type="file" id="file" accept=".jpg,.jpeg,.png" onChange={ManejarOnChange} />
            </div>
            {imagenBase64 ? 
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imagenBase64} alt="imagen seleccionada" />
                    </div>
                </div> : null   
            }
            {imagenUrlState ? 
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imagenUrlState} alt="imagen seleccionada" />
                    </div>
                </div> : null   
            }
        </div>
    )
}

interface formGroupImagenProps {
    campo: string;
    label: string;
    imagenUrl?: string;
}
