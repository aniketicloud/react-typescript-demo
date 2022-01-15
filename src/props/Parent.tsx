import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <div>
      <Child
        color="red"
        onClick={() => console.log("function as prop from parent to child")}
      />
      <ChildAsFC color="green" onClick={() => console.log("React.FC Child")}>
        some gibberish Default Slot Content or Children Content
      </ChildAsFC>
    </div>
  );
};

export default Parent;
