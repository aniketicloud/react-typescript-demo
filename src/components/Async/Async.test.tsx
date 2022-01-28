import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe.skip("Async component", () => {
  test("renders posts if request is successful", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: 1,
          title: "First Post",
        },
      ],
    });
    render(<Async />);

    const listItemsElements = await screen.findAllByRole("listitem");
    expect(listItemsElements).not.toHaveLength(0);
  });
});
