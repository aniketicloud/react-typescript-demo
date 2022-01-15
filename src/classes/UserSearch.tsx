import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  foundUser: User | undefined;
  initialMessage: string;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    foundUser: undefined,
    initialMessage: "",
  };

  render() {
    const { name, foundUser, initialMessage } = this.state;
    const onClick = () => {
      const foundUser = this.props.users.find((user) => {
        this.setState({ initialMessage: "User not found . . !" });
        return user.name === name;
      });
      this.setState({ foundUser: foundUser });
    };
    return (
      <div>
        Find the user:
        <br />
        <input
          value={name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button onClick={onClick}>Search</button>
        <br />
        {foundUser ? foundUser.name : initialMessage}
      </div>
    );
  }
}

export default UserSearch;
