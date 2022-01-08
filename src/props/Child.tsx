interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>Color from Child is {color}</div>;
};
