import { render, screen } from "@testing-library/react";
import { FormInput } from "../FormInput";

describe("FormInput", () => {
  it("renders the label and input correctly", () => {
    render(<FormInput label="Test Label" name="test-input" />);

    const label = screen.getByText("Test Label");
    const input = screen.getByRole("textbox");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "test-input");
  });

  it("applies the correct type", () => {
    render(<FormInput label="Email" name="email" type="email" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "email");
  });

  it("applies the placeholder", () => {
    render(<FormInput label="Test" name="test" placeholder="Enter text here" />);

    const input = screen.getByPlaceholderText("Enter text here");
    expect(input).toBeInTheDocument();
  });

  it("shows an asterisk when required is true", () => {
    render(<FormInput label="Required Field" name="req" required={true} />);

    const label = screen.getByText("Required Field *");
    expect(label).toBeInTheDocument();

    const input = screen.getByRole("textbox");
    expect(input).toBeRequired();
  });

  it("does not show an asterisk when required is false", () => {
    render(<FormInput label="Optional Field" name="opt" required={false} />);

    const label = screen.getByText("Optional Field");
    expect(label).toBeInTheDocument();
    expect(screen.queryByText("Optional Field *")).not.toBeInTheDocument();

    const input = screen.getByRole("textbox");
    expect(input).not.toBeRequired();
  });

  it("defaults type to text if not provided", () => {
    render(<FormInput label="Default Type" name="default" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "text");
  });
});
