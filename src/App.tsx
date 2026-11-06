import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  return showLogin ? (
    <Login onSwitch={() => setShowLogin(false)} />
  ) : (
    <Register onSwitch={() => setShowLogin(true)} />
  );
}