import React, { useState } from "react";
import star from "../assets/icon-star.svg";

function RatingCard() {
  const [rating, setRating] = useState(""); //need to lift the state up to parent

  const r = [1, 2, 3, 4, 5];
  //need to apply css to cehcked and unchecked button
  const radio = r.map((rating) => {
    return (
      <button
        key={rating}
        className="h-12 w-12 rounded-full bg-mediumGrey hover:bg-orange"
      >
        {rating}
      </button>
    );
  });

  return (
    <div
      id="ratingCard"
      className="w-[340px] rounded-2xl bg-darkBlue px-6 py-8 text-white"
    >
      <div
        id="logoContainer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-mediumGrey"
      >
        <img src={star} alt="star icon" />
      </div>
      <h1 className="mt-8 text-3xl font-[700]">How did we do?</h1>
      <p className="mt-3 text-sm text-mediumGrey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="mt-8 flex justify-between">{radio}</div>
      <button
        type="submit"
        className="mt-10 w-full rounded-full bg-orange py-3 text-center uppercase tracking-widest hover:bg-white hover:text-orange"
      >
        Submit
      </button>
    </div>
  );
}

export default RatingCard;
