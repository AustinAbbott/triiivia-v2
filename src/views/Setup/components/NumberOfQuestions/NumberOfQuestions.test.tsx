import { render, screen } from "@testing-library/react";
import NumberOfQuestions from ".";

describe("NumberOfQuestions", () => {
  const mockProps = {
    disabled: false,
    selectedNumberOfQuestions: "10",
    setSelectedNumberOfQuestions: jest.fn(),
  };

  test("mounts", async () => {
    render(<NumberOfQuestions {...mockProps} />);
    expect(screen.getByTestId("NumberOfQuestions")).toBeTruthy();
  });
});
