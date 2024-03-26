import { render, screen } from "@testing-library/react";
import { QuestionResponse } from "../../constants";
import TrueOrFalseCard from ".";

describe("TrueOrFalse", () => {
  const mockProps = {
    questionData: { correct_answer: "True" } as QuestionResponse,
    incrementIndex: jest.fn(),
  };

  test("mounts", () => {
    render(<TrueOrFalseCard {...mockProps} />);
    expect(screen.getByTestId("TrueOrFalseCard")).toBeTruthy();
  });
});
