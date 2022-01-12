import { useState } from "react";

const users = [
  { name: "aaa", age: 12 },
  { name: "www", age: 12 },
  { name: "zzz", age: 12 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [foundUser, setFoundUser] = useState<
    undefined | { name: string; age: number }
  >();

  const onClick = () => {
    setFoundUser(users.find((user) => user.name === name));
  };

  return (
    <div>
      Find the user:
      <br />
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={onClick}>Search</button>
      <br />
      {foundUser ? foundUser.name : "No User Found"}
    </div>
  );
};

export default UserSearch;
