import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request is successful", async () => {
    render(<Async />);

    const listItemsElements = await screen.findAllByRole("listitem");
    expect(listItemsElements).not.toHaveLength(0);
  });
});
