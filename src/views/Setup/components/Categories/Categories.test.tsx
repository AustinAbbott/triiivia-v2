import { render, screen } from "@testing-library/react";
import Categories from ".";
import { Category } from "../../../../constants";

describe("Categories", () => {
  const mockProps = {
    loading: false,
    selectedCategory: {} as Category,
    setAvailableQuestions: jest.fn(),
    setLoading: jest.fn(),
    setSelectedCategory: jest.fn(),
  };

  test("mounts", () => {
    render(<Categories {...mockProps} />);
    expect(screen.getByTestId("Categories")).toBeTruthy();
  });
});
