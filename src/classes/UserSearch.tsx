import { Component } from "react";

export interface User {
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

  // ? if you just write it as onClick() {}, then the value of
  // this will show undefined. so to remove that make it arrow function
  // ! here, you can not add const/let to onClick,
  // because A class member cannot have the 'const' keyword.
  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      this.setState({ initialMessage: "User not found . . !" });
      return user.name === this.state.name;
    });
    this.setState({ foundUser: foundUser });
  };

  render() {
    const { name, foundUser, initialMessage } = this.state;

    return (
      <div>
        Find the user:
        <br />
        <input
          value={name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button onClick={this.onClick}>Search</button>
        <br />
        {foundUser ? foundUser.name : initialMessage}
      </div>
    );
  }
}

export default UserSearch;
