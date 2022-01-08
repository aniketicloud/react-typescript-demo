import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <div>
      <Child color="red" />
      <ChildAsFC color="green" />
    </div>
  );
};

export default Parent;
