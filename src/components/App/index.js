import "./App.css";
import Login from "../Login/index";
import Dashboard from "../Dashboard/index";
import { useLoginContext } from "../../hooks/useLogin";

function App() {
  const { loggedIn } = useLoginContext();

  return (
    <div className="App">
      {!loggedIn && <Login />}
      {loggedIn && <Dashboard />}
    </div>
  );
}

export default App;
