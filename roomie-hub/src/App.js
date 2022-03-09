import "./App.css";
import Dashboard from "./Dashboard.js";
import LoginPage from "./LoginPage.js";

import { useState } from "react";

function App() {

  const [currentUser, setCurrentUser] = useState("")

  const setUser = (username) => {
    setCurrentUser(username);
  }

  const onLogout = () => {
    setCurrentUser("");
  }

  if (currentUser === "") {
    return (<LoginPage onLogin={setUser} />);
  } else {
    return (<Dashboard onLogout={onLogout} currentUser={currentUser}/>);
  }
}

export default App;
