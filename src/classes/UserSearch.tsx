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
    const onClick = () => {
      const foundUser = this.props.users.find((user) => {
        this.setState({ initialMessage: "User not found . . !" });
        return user.name === this.state.name;
      });
      this.setState({ foundUser: foundUser });
    };
    return (
      <div>
        Find the user:
        <br />
        <input
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button onClick={onClick}>Search</button>
        <br />
        {this.state.foundUser
          ? this.state.foundUser.name
          : this.state.initialMessage}
      </div>
    );
  }
}

export default UserSearch;
