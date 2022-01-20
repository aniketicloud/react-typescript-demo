import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserSearch from "./UserSearch";

describe.only("User Search Component", () => {
  test("renders 'Search Text', input field and a search button", () => {
    // ? Arrange
    render(<UserSearch />);

    // ? Act
    // Nothing

    // ? Assert
    // const userSearchMessage = screen.getByText("Find the user:")
    // const inputField = screen.getByRole("searchbox");
    // const inputField = screen.getByLabelText("Find the User:");
    const inputField = screen.getByRole("searchbox", {
      name: "searchedusername",
    });
    const searchButton = screen.getByRole("button", {
      name: "Search",
    });
    expect(inputField).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test.only("renders 'user not found' when button is clicked input has nothing", () => {
    // ? Arrange
    render(<UserSearch />);

    // ? Act => Click the button without any input
    const searchButton = screen.getByRole("button", {
      name: "Search",
    });
    userEvent.click(searchButton);

    // ? Assert => check if the screen renders 'user not found'
    const userNotFoundValidation = screen.getByText("user not found");
    expect(userNotFoundValidation).toBeInTheDocument();
  });

  test("renders username 'aaa' when I type 'aaa' and click search button", () => {
    // ? Arrange
    render(<UserSearch />);

    // ? Act =>
    // 1 - type 'aaa' in input field
    const inputField = screen.getByRole("searchbox", {
      name: "searchedusername",
    });
    userEvent.type(inputField, "aaa");
    // 2 - Click on 'Search' button
    const searchButton = screen.getByRole("button", {
      name: "Search",
    });
    userEvent.click(searchButton);

    // ? Assert
    const userFoundValidation = screen.getByText("aaa");
    expect(userFoundValidation).toBeInTheDocument();
  });
});
