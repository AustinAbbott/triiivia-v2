import { screen, render } from "@testing-library/react";
import { QuestionCard } from ".";
import { QuestionResponse, TypeResponse } from "../../constants";

import * as ContextFunctions from "../../views/Game/index";

describe("QuestionCard", () => {
  const mockProps = {
    index: 0,
    questionData: { incorrect_answers: [""] } as QuestionResponse,
    incrementIndex: jest.fn(),
  };

  beforeEach(() => {
    jest
      .spyOn(ContextFunctions, "AccessScoreContext")
      .mockReturnValue({ update: jest.fn(), state: { score: 0 } });
  });

  test("does not return a question card if the question type is unknown", () => {
    render(
      <QuestionCard
        {...mockProps}
        questionData={
          {
            ...mockProps.questionData,
            type: "unknown_type",
          } as unknown as QuestionResponse
        }
      />,
    );

    expect(screen.queryByTestId("TrueOrFalseCard")).toBeNull();
    expect(screen.queryByTestId("MultipleChoiceCard")).toBeNull();
  });

  test("returns True or False Card if the question type is TRUE_FALSE", async () => {
    render(
      <QuestionCard
        {...mockProps}
        questionData={
          {
            ...mockProps.questionData,
            type: TypeResponse.TRUE_FALSE,
          } as QuestionResponse
        }
      />,
    );

    expect(await screen.findByTestId("TrueOrFalseCard")).toBeInTheDocument();
    expect(screen.queryByTestId("MultipleChoiceCard")).toBeNull();
  });

  test("returns Multiple Choice Card if the question type is MULTIPLE_CHOICE", async () => {
    render(
      <QuestionCard
        {...mockProps}
        questionData={
          {
            ...mockProps.questionData,
            type: TypeResponse.MULTIPLE_CHOICE,
          } as QuestionResponse
        }
      />,
    );

    expect(await screen.findByTestId("MultipleChoiceCard")).toBeInTheDocument();
    expect(screen.queryByTestId("TrueOrFalseCard")).toBeNull();
  });
});
