import React from "react";
import thankyou from "../assets/illustration-thank-you.svg";

function Completed({ data }) {
  return (
    <div
      id="ratingCard"
      className="grid w-[340px] place-content-center rounded-2xl bg-darkBlue px-6 py-8 text-white"
    >
      <div className="grid place-content-center">
        <img src={thankyou} alt="thankyou illustration" />
      </div>
      <div className="text-center">
        <p>You selected {data.rating} out of 5</p>
      </div>
      <div className="text-center">
        <h1>Thank You!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default Completed;
