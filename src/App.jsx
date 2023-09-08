import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app flex h-screen max-w-[1300px] mx-auto px-3 py-0">

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
