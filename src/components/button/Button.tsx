type ButtonProps = {
  onClick: () => void;
  disabled: boolean;
  text: string;
};

export const Button = ({ disabled, onClick, text }: ButtonProps) => (
  <button
    className="bg-gray-300 px-10 py-3 rounded text-[18px]"
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);
