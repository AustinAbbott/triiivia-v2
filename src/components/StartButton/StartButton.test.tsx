import { render, screen } from "@testing-library/react";
import StartButton from ".";

describe("StartButton", () => {
  const mockProps = {
    loading: false,
    readyToGo: false,
    handleStartClick: jest.fn(),
  };

  test("mounts", () => {
    render(<StartButton {...mockProps} />);
    expect(screen.getByTestId("StartButton")).toBeTruthy();
  });
});
