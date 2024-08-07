type ButtonProps = {
  onClick: () => void;
  disabled: boolean;
  text: string;
};

export const Button = ({ disabled, onClick, text }: ButtonProps) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);
