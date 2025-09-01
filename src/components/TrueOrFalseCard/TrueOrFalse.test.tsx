import { render, screen } from "@testing-library/react";
import { QuestionResponse } from "../../constants";
import TrueOrFalseCard from ".";
import { ScoreContext } from "../../views/Game";

describe("TrueOrFalseCard", () => {
  const mockProps = {
    questionData: { correct_answer: "True" } as QuestionResponse,
    incrementIndex: jest.fn(),
  };

  const renderComponent = () => {
    return render(
      <ScoreContext.Provider
        value={{ state: { score: 0 }, update: jest.fn() }}
      >
        <TrueOrFalseCard {...mockProps} />
      </ScoreContext.Provider>
    );
  };

  test("mounts", () => {
    renderComponent();
    expect(screen.getByTestId("TrueOrFalseCard")).toBeTruthy();
  });
});
