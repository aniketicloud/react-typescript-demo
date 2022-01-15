import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import UserSearch from "./classes/UserSearch";

const users = [
  { name: "aaa", age: 12 },
  { name: "www", age: 12 },
  { name: "zzz", age: 12 },
];

ReactDOM.render(
  <React.StrictMode>
    <UserSearch users={users} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
