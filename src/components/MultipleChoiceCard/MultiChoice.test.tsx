import { render, screen } from "@testing-library/react";
import MultipleChoiceCard from ".";
import { QuestionResponse } from "../../constants";
import userEvent from "@testing-library/user-event";

describe("MultipleChoiceCard", () => {
  const mockProps = {
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    questionData: { correct_answer: "Choice 3" } as QuestionResponse,
    incrementIndex: jest.fn(),
  };

  test("mounts", () => {
    render(<MultipleChoiceCard {...mockProps} />);
    expect(screen.getByTestId("MultipleChoiceCard")).toBeTruthy();
  });

  test("renders each choice in a button", () => {
    render(<MultipleChoiceCard {...mockProps} />);
    const choiceButtons = screen.queryAllByRole("button");

    expect(choiceButtons[0]).toHaveTextContent("Choice 1");
    expect(choiceButtons[1]).toHaveTextContent("Choice 2");
    expect(choiceButtons[2]).toHaveTextContent("Choice 3");
    expect(choiceButtons[3]).toHaveTextContent("Choice 4");
  });

  describe("Next Button", () => {
    test("is disabled by default", () => {
      render(<MultipleChoiceCard {...mockProps} />);
      expect(screen.getByTestId("MultipleChoiceNextButton")).toBeDisabled();
    });

    test("is enabled once the correct answer has been selected", async () => {
      render(<MultipleChoiceCard {...mockProps} />);
      const choiceButtons = screen.queryAllByRole("button");
      await userEvent.click(choiceButtons[2]);
      expect(screen.getByTestId("MultipleChoiceNextButton")).toBeEnabled();
    });
  });
});
