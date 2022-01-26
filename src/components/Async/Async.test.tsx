import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request is successful", () => {
    render(<Async />);

    const listItemsElements = screen.getAllByRole("listitem");
    expect(listItemsElements).not.toHaveLength(0);
  });
});
