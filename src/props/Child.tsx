interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Color from Child is {color}
      <button onClick={onClick}>Click Child</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      Color from Child is {color}
      <button onClick={onClick}>Click React.FC</button>
      <br />
      Children / Default slot passed from parent: {children}
    </div>
  );
};

ChildAsFC.displayName = "Component Display Name in Browser";
