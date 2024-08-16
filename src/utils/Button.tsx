



import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?(): void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
}

export default function Button({ children, onClick = () => {}, type = "button", disabled, className="btn btn-primary" }: ButtonProps) {
    return (
        <button disabled={disabled} type={type} className={className} onClick={onClick}>
            {children}
        </button>
    );
}
