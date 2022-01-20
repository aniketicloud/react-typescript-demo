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
  const [initialMessage, setInitialMessage] = useState("");

  const onClick = () => {
    setFoundUser(
      users.find((user) => {
        setInitialMessage("user not found");
        return user.name === name;
      })
    );
  };

  return (
    <div>
      <label htmlFor="searchedusername">Find the User:</label>
      <input
        type="search"
        value={name}
        id="searchedusername"
        name="searchedusername"
        aria-label="searchedusername"
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={onClick}>Search</button>
      <br />
      {foundUser ? foundUser.name : initialMessage}
    </div>
  );
};

export default UserSearch;
