import "./Rate.css";
import star from "../icons/icon-star.svg";

function Rate({ setShowRate, selected, setSelected }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="sectionFirst">
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
            <div
              className="numbersDiv"
              onClick={() => setSelected(value)}
              style={
                selected === value
                  ? { backgroundColor: "hsl(25, 97%, 53%)" }
                  : { backgroundColor: "#262e38" }
              }
            >
              {value}
            </div>
          ))}
        </div>
        <button id="btn" onClick={() => setShowRate(false)}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Rate;
