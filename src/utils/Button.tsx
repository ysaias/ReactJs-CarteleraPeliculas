<<<<<<< HEAD



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
=======
export default function Button(props: buttonProps) {
  return (
    <button
      type={props.type}
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

interface buttonProps {
  children: React.ReactNode;
  onClick?(): void;
  type: "button" | "submit";
  disabled: boolean;
  className: string;
}

Button.defaultProps = {
  type: "button",
  disabled: false,
  className: "btn btn-primary",
};
>>>>>>> 759a93921c0d74b2cecc14a627f57f22707dace2
