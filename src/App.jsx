import React, { useState } from "react";
import Completed from "./components/completed";
import RatingCard from "./components/ratingCard";
function App() {
  const [rating, setRating] = useState({
    rating: "",
    checked: false,
  });

  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    rating.rating === ""
      ? setSubmit(prevValue)
      : setSubmit((prevValue) => !prevValue);
  };

  const handleRatingCheck = (rat) => {
    setRating({ rating: rat, checked: true });
  };

  return (
    <div
      id="mainContainer"
      className="container grid h-[100vh] place-content-center"
    >
      {!submit ? (
        <RatingCard
          onCheck={handleRatingCheck}
          data={rating}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Completed data={rating} />
      )}
    </div>
  );
}

export default App;
