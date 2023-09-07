import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1 className="text-3xl font-bold underline text-center text-red-400">
        Hello world!
      </h1>

      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
