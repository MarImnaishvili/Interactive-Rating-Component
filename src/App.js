import "./App.css";
import { useState } from "react";
import star from "./icons/icon-star.svg";
import thankYou from "./icons/illustration-thank-you.svg";
import Numbers from "./components/Numbers";

function App() {
  const [selected, setSelected] = useState(0);
  const [styleFirst, setStyleFirst] = useState("block");
  const [styleSecond, setStyleSecond] = useState("none");

  function handleClick(numb) {
    setSelected(numb);
  }

  const changeStyle = () => {
    if (styleFirst === "block") {
      setStyleFirst("none");
      setStyleSecond("block");
    }
  };

  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="App">
        <div className={`sectionFirst ${styleFirst}`}>
          <div className="starIconDiv">
            <img className="star" src={star} alt="star"></img>
          </div>
          <h1>How did we do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            doloribus ducimus quibusdam ex ipsum. Sit facere, quasi odit hic
            ducimus perspiciatis!
          </p>
          <div className="ratings">
            {numbers.map((value) => (
              <Numbers
                key={value}
                selected={selected}
                value={value}
                handleClick={handleClick}
              />
            ))}
          </div>
          <button id="btn" onClick={changeStyle}>
            SUBMIT
          </button>
          {console.log(selected)}
        </div>
      </div>
      <div className="App">
        <div className={`sectionSecond ${styleSecond}`}>
          <div className="thankYouIconDiv">
            <img className="thankYou" src={thankYou} alt="star"></img>
          </div>
          <div className="result">
            {`You selected ${selected} out of ${numbers.length}`}
          </div>
          <h1>Thank you!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            eligendi, doloremque, modi, eveniet consectetur!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
