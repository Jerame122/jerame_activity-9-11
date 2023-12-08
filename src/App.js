import React, {useState}  from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./login";

function App() {
  const [currentForm, setCurrentForm]  = useState ("Login");

    return (
        <div className="App">
            {
              currentForm === "Login" ? <Login /> : <Register />
            }
        </div>
    );
}

export default App;
