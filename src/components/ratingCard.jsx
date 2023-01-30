import React from "react";
import star from "../assets/icon-star.svg";
import "../index.css";

function RatingCard({ onCheck, data, handleSubmit }) {
  const r = [1, 2, 3, 4, 5];
  const radio = r.map((rating) => {
    return (
      // <button
      //   key={rating}
      //   className={`${
      //     data.rating === rating && data.checked
      //       ? "h-12 w-12 rounded-full bg-orange"
      //       : "h-12 w-12 rounded-full bg-mediumGrey hover:bg-orange"
      //   } `}
      //   onClick={() => {
      //     onCheck(rating);
      //   }}
      // >
      //   {rating}
      // </button>
      <label
        htmlFor={rating}
        key={rating}
        className={`${
          data.rating === rating && data.checked
            ? " radio-label h-12 w-12 rounded-full bg-orange"
            : " radio-label h-12 w-12 rounded-full bg-mediumGrey hover:bg-orange"
        } flex items-center justify-center`}
      >
        <input
          type="radio"
          name="rating"
          id={rating}
          value={rating}
          onChange={() => onCheck(rating)}
        />
        {rating}
      </label>
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
      <div className="radio-container mt-8 flex justify-between">{radio}</div>
      <button
        type="submit"
        className=" mt-10 w-full rounded-full bg-orange py-3 text-center uppercase tracking-widest hover:bg-white hover:text-orange disabled:opacity-50 disabled:hover:cursor-not-allowed disabled:hover:bg-orange disabled:hover:text-white"
        disabled={data.rating === ""}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default RatingCard;
