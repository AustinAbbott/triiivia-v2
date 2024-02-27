import { render, screen } from "@testing-library/react";
import Mode from ".";
import { Modes } from "../../../../constants";

describe("Mode", () => {
  const mockProps = {
    selectedMode: Modes.MULTIPLE_CHOICE,
    setSelectedMode: jest.fn(),
  };

  test("mounts", () => {
    render(<Mode {...mockProps} />);
    expect(screen.getByTestId("Mode")).toBeTruthy();
  });
});
