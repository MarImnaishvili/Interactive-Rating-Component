import "./App.css";
import { useState } from "react";
import Rate from "./components/Rate/Rate";
import Result from "./components/Result/Result";

function App() {
  const [selected, setSelected] = useState(null);
  const [showRate, setShowRate] = useState(true);

  return (
    <div className="App">
      {showRate ? (
        <Rate
          setShowRate={setShowRate}
          selected={selected}
          setSelected={setSelected}
        />
      ) : (
        <Result selected={selected} />
      )}
    </div>
  );
}

export default App;
