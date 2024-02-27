import { render, screen } from "@testing-library/react";
import Categories from ".";
import { Category } from "../../../../constants";

describe("Categories", () => {
  const mockProps = {
    selectedCategory: {} as Category,
    setAvailableQuestions: jest.fn(),
    setSelectedCategory: jest.fn(),
  };

  test("mounts", () => {
    render(<Categories {...mockProps} />);
    expect(screen.getByTestId("Categories")).toBeTruthy();
  });
});
