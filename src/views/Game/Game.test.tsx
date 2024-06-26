import { render, screen } from "@testing-library/react";
import { Game } from ".";
import { QuestionResponse } from "../../constants";
import * as ContextFunctions from ".";

describe("Game", () => {
  const mockProps = {
    setQuestions: jest.fn(),
  };

  beforeEach(() => {
    jest
      .spyOn(ContextFunctions, "AccessScoreContext")
      .mockReturnValue({ update: jest.fn(), state: { score: 0 } });
  });

  test("returns null if no questions are provided", () => {
    render(<Game {...mockProps} />);
    expect(screen.queryByTestId("Game")).toBeNull();
  });

  test("mounts if questions are provided", async () => {
    render(
      <Game
        {...mockProps}
        questions={[
          { incorrect_answers: ["Wrong answer"] } as QuestionResponse,
        ]}
      />
    );
    expect(await screen.findByTestId("Game")).toBeInTheDocument();
  });
});
