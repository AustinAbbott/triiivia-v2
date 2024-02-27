import { render, screen } from "@testing-library/react";
import Difficulty from ".";
import { DifficultyOptions } from "../../../../constants";
import { MOCK_AVAILABLE_QUESTION_RESPONSE } from "../../../../test-data";

describe("Difficulty", () => {
  const mockProps = {
    availableQuestions: MOCK_AVAILABLE_QUESTION_RESPONSE,
    selectedDifficulty: DifficultyOptions.EASY,
    setSelectedDifficulty: jest.fn(),
  };

  test("mounts", () => {
    render(<Difficulty {...mockProps} />);
    expect(screen.getByTestId("Difficulty")).toBeTruthy();
  });
});
