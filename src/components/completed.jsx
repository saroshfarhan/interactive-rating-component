import React from "react";
import thankyou from "../assets/illustration-thank-you.svg";

function Completed({ data }) {
  return (
    <div
      id="ratingCard"
      className="grid w-[340px] place-content-center gap-8 rounded-2xl bg-darkBlue px-6 py-8 text-white"
    >
      <div className="mt-3 grid place-content-center">
        <img src={thankyou} alt="thankyou illustration" />
      </div>
      <div className=" mx-10 rounded-full bg-veryDarkBlue text-center">
        <p className="py-3 text-sm text-orange">
          You selected {data.rating} out of 5
        </p>
      </div>
      <div className="text-center">
        <h1 className="mb-3 text-2xl font-semibold">Thank You!</h1>
        <p className="text-sm text-LightGrey">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default Completed;
