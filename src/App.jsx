import "./App.css";
import Math from "./Math";
import Words from "./Words";
import { useState } from "react";

function App() {
  const [app, setApp] = useState(null);
  const handleApp = (app) => {
    switch (app) {
      case "words":
        setApp(<Words />);
        break;
      case "math":
        setApp(<Math />);
        break;
    }
  };

  return (
    <>
      {app}
      <div className="btn-container">
        <button className="main-button" onClick={() => handleApp("words")}>
          Words
        </button>
        <button className="main-button" onClick={() => handleApp("math")}>
          Math
        </button>
      </div>
    </>
  );
}

export default App;
