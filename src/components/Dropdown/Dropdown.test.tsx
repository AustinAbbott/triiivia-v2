import { render, screen } from "@testing-library/react";
import { Dropdown } from ".";

describe("Dropdown", () => {
  const mockProps = {
    placeholder: "Testing",
    options: ["option1", "option2"],
    selectedOption: undefined,
    testId: "TestingDropdown",
    setSelectedOption: jest.fn(),
  };

  test("mounts", () => {
    render(<Dropdown {...mockProps} />);
    expect(screen.getByTestId("TestingDropdown")).toBeTruthy();
  });
});
