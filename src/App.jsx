import "./App.css";
import Math from "./Math";
import Words from "./Words";
import { useEffect, useState } from "react";
import useFindOrientation from "./hooks/useFindOrientatinon";

function App() {
  const orientation = useFindOrientation();
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
      {orientation === "portrait" ? (
        <p>Please rotate your device to landscape mode.</p>
      ) : (
        <>{app}</>
      )}
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
