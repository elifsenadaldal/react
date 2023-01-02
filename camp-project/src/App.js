import "./App.css";
import React from "react";

import User from "./layouts/User";

const friends = [
  {
    id: 1,
    name: "Max",
  },
  {
    id: 2,
    name: "Jason",
  },
  {
    id: 3,
    name: "Nicole",
  },
];

function App() {
  return (
    <>
      <User
        name="Adam"
        surname="Smith"
        isLoggedIn={true}
        age={29}
        friends={friends}
      />
    </>
  );
}
export default App;
