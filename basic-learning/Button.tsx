interface buttonProps {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onclick: () => void;
}

const Button = ({ children, onclick, color = "primary" }: buttonProps) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
