import { FormEvent } from "react";

type TextInputProps = {
  searchValue: string;
  handleChange: (e: FormEvent) => void;
};

export const TextInput = ({ searchValue, handleChange }: TextInputProps) => {
  return (
    <input
      className="border border-gray-400 bg-transparent p-1 rounded my-4 text-gray-200"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type your search"
    />
  );
};
