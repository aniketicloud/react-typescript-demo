interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>Color from Child is {color}</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div> Color from React Child is {color}</div>;
};

ChildAsFC.displayName = "Component Display Name in Browser";
