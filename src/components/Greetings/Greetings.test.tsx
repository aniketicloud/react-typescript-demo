import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
describe("Greetings component", () => {
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
    expect(helloWorldElement).toBeInTheDocument()
  });
});
