type TextInputProps = {
  searchValue: string;
  handleChange: () => void;
};

export const TextInput = ({ searchValue, handleChange }: TextInputProps) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type your search"
    />
  );
};
