



import { CSSProperties, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?(): void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    style?: CSSProperties ;
}

export default function Button({ children, onClick = () => {}, type = "button", disabled, className="btn btn-primary", style }: ButtonProps) {
    return (
        <button disabled={disabled} type={type} className={className} onClick={onClick} style={style}>
            {children} 
        </button>
    );
}
