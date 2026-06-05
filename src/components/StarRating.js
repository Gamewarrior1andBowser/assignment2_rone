import { useState } from "react";
import Star from "./Star";

function StarRating() {
  const stars = [{id: 1}, {id: 2}, 
  {id: 3}, {id: 4}, {id: 5}];
  const[rating, setRating] = useState(0);
  
  const text = () => {
    switch(rating) {
    case 1: return "Utter garbage";
    case 2: return "Kinda Bad";
    case 3: return "Sorta Decent";
    case 4: return "Kinda Good";
    case 5: return "Very great";
    default: return "";
  }}

  const light = () => {
    text();
  }

  return (
    <section>
      <div className="flex center">
        {stars.map((star) => (
        <Star id={star.id} setRating={setRating} 
        rating={rating} text={text}/>
      ))}
      </div>
      <h2>{text(rating)}</h2>
    </section>
  );
}

export default StarRating;