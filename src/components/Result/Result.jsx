import "./Result.css";
import thankYou from "../icons/illustration-thank-you.svg";

function Result({ selected }) {
  return (
    <div>
      <div className="sectionSecond">
        <div className="thankYouIconDiv">
          <img className="thankYou" src={thankYou} alt="star"></img>
        </div>
        <div className="resultShow">{`You selected ${selected} out of 5`}</div>
        <h1>Thank you!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          eligendi, doloremque, modi, eveniet consectetur!
        </p>
      </div>
    </div>
  );
}

export default Result;
