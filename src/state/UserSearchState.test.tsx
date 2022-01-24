import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// components
import UserSearch from "./UserSearch";

// data
import { users } from "./UserSearch";

// interface
import { User } from "../classes/UserSearch";

describe.skip("User Search Component", () => {
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

  test("renders 'user not found' when button is clicked input has nothing", () => {
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

  test.only("renders username from the array data when I type 'user.name' and click search button", () => {
    // ? Arrange
    render(<UserSearch />);

    // // ? Act =>
    // // 1 - type 'aaa' in input field
    // const inputField = screen.getByRole("searchbox", {
    //   name: "searchedusername",
    // });
    // userEvent.type(inputField, "aaa");
    // // 2 - Click on 'Search' button
    // const searchButton = screen.getByRole("button", {
    //   name: "Search",
    // });
    // userEvent.click(searchButton);

    // // ? Assert
    // const userFoundValidation = screen.getByText("aaa");
    // expect(userFoundValidation).toBeInTheDocument();

    // common function to test bunch of data
    const testUsersArray = (usersArray: User[]): void => {
      // find inputfield and search-button
      const inputField = screen.getByRole("searchbox", {
        name: "searchedusername",
      });
      const searchButton = screen.getByRole("button", {
        name: "Search",
      });

      usersArray.forEach((user) => {
        // ? Act => type one user name from array in input field & click search
        userEvent.type(inputField, user.name);

        // 2 - Click on 'Search' button
        userEvent.click(searchButton);

        // ? Assert
        const userFoundValidation = screen.getByText(user.name);
        expect(userFoundValidation).toBeInTheDocument();

        // TODO: FIND DIFFERENT SOLUTION TO CLEAR THE INPUT VALUE
        // clearing the input field for next array value
        fireEvent.change(inputField, { target: { value: "" } });
      });
    };

    testUsersArray(users);
  });
});
