import { useState } from "react";
import Output from "../Output/Output";

const Greetings: React.FC = () => {
  const [changedText, setChangedText] = useState(false);

  const clickHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>Original Text</Output>}
      {changedText && <p>Text is changed</p>}
      <button onClick={clickHandler} data-testid="text-change-button">
        Change the text
      </button>
    </div>
  );
};

export default Greetings;
