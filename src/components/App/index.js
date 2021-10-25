import React, { useState } from "react";

import "./App.css";
import Login from "../Login/index";
import Dashboard from "../Dashboard/index";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {!loggedIn && <Login setLoggedIn={setLoggedIn} />}
      {loggedIn && <Dashboard setLoggedIn={setLoggedIn} />}
    </div>
  );
}

export default App;
