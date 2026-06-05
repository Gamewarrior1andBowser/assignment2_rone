import { useState, useEffect } from "react";
import Star from "./Star";

function text(rating) {
  switch(rating) {
    case 1: return "Utter garbage";
    case 2: return "Kinda Bad";
    case 3: return "Sorta Decent";
    case 4: return "Kinda Good";
    case 5: return "Very great";
    default: return "Please leave a rating";
  }
}

function StarRating() {
  const stars = [{id: 1}, {id: 2}, 
  {id: 3}, {id: 4}, {id: 5}];
  const[rating, setRating] = useState(0);

  const isLit = () => {
    return this.id <= rating ? true: false;
  }
  const light = () => {
    setRating(this.id);
  }

  useEffect(() => {
    text(rating);
  })

  return (
    <section className="rating">
      <h2>{text(rating)}</h2>
      <div className="flex">
        {stars.map((star) => (
        <Star id={star.id} isLit={isLit} light={light}/>
      ))}
      </div>
    </section>
  );
}

export default StarRating;