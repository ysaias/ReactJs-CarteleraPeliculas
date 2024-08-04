import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import './FormGroupMarkdown.css'

export default function FormGroupMarkdown({ campo, label }: formGroupMarkdownProps) {

    const { values } = useFormikContext<any>();

    return (
        <div className="form-group form-markdown">
            <div>
                <label htmlFor="markdown">{label}</label>
                <div>
                    <Field id="markdown" name={campo} as="textarea" className="form-textarea" />
                </div>
            </div>
            <div>
                <label>{label} (preview):</label>
                <div className="markdown-container">
                    <ReactMarkdown>{values[campo]}</ReactMarkdown>
                </div>
            </div>

        </div>
    )
}

interface formGroupMarkdownProps {
    campo: string;
    label: string;
}