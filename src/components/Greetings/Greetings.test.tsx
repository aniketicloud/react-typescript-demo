import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";
describe.skip("Greetings component", () => {
  test("renders 'Hello World!'", () => {
    // ? Arrange
    render(<Greetings />);

    // ? Act
    // Nothing to act

    // ? Assert = search the element and check with fixed value
    // !! `get...` functions will throw an error if an element is not found
    // !! `query...` functions will *NOT* throw an error if an element is not found
    // !! `find...` functions will return a promise
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'Original Text' at first", () => {
    render(<Greetings />);
    const originalText = screen.getByText("Original Text");
    expect(originalText).toBeInTheDocument();
  });

  test("renders 'Text is changed' when the button is clicked", () => {
    // ? Arrange
    render(<Greetings />);

    // ? Act = click the button
    // !! `getBy...` will return a Single,
    // !! `getByAll...` will return an Array,
    // so in typescript, you get an error if you use the incorrect method
    const buttonElement = screen.getByTestId("text-change-button");
    userEvent.click(buttonElement);

    // ? Assert = check for the changed text
    const changedText = screen.getByText("Text is changed");
    expect(changedText).toBeInTheDocument();
  });

  test("does not render 'Original Text' after clicking the button", () => {
    // ? Copy Pasting and changing the above test

    // ? Arrange
    render(<Greetings />);

    // ? Act = click the button
    const buttonElement = screen.getByTestId("text-change-button");
    userEvent.click(buttonElement);

    // ? Assert = check if unavailability of the original text
    // ! if you write the below code, the test will obviously fail,
    // because you will not find the text with getByText method
    // const originalText = screen.getByText("Original Text");
    // expect(originalText).not.toBeInTheDocument();

    // ! so, instead of using `get...` method, I am using `query...` method
    const originalTextAvailibility = screen.queryByText("Original Text");
    expect(originalTextAvailibility).toBeNull();
  });
});
