import { useState } from "react";
import Star from "./Star";

function text(rating) {
  switch(rating) {
    case 0: return "Please leave a rating";
    case 1: return "Utter garbage";
    case 2: return "Kinda Bad";
    case 3: return "Sorta Decent";
    case 4: return "Kinda Good";
    case 5: return "Very great";
  }
}

function StarRating() {
  const stars = [{id: 1}, {id: 2}, 
  {id: 3}, {id: 4}, {id: 5}];
  const[rating, setRating] = useState(0);

  const isLit = () => {
    if (this.id <= rating) {
      return true;
    } else {
      return false;
    }
  }

  const light = () => {
    setRating(this.id);
    text(rating);
  }

  return (
    <section className="rating">
      <h2>{text(rating)}</h2>
      {stars.map((star) => (
        <Star id={star.id} isLit={isLit} light={light}/>
      ))}
    </section>
  );
}

export default StarRating;