import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TextInput } from ".";

describe("Text input component tests", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={"testando"} />);

    const input: HTMLInputElement =
      screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe("testando");
  });

  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="um valor qualquer" />);

    const input: HTMLInputElement =
      screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe("um valor qualquer");

    const value = "o valor";
    userEvent.type(input, value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(
      <TextInput handleChange={fn} searchValue="" />
    );
    expect(container).toMatchSnapshot();
  });
});
