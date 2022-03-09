import "./App.css";
import Dashboard from "./Dashboard.js";
import LoginPage from "./LoginPage.js";

import { useState } from "react";

function App() {

  const [showLoginPage, setShowLoginPage] = useState(true);

  const login = () => {
    console.log("logged in")
    setShowLoginPage(false);
  }

  const logout = () => {
    console.log("logged out")
    setShowLoginPage(true);
  }

  if (showLoginPage) {
    return (<LoginPage onLogin={login}/>);
  } else {
    return (<Dashboard onLogout={logout} />);
  }
}

export default App;
