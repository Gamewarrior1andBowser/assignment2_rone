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
  let rating = 0;

  return (
    <section className="rating">
      
      <h2>{text(rating)}</h2>
    </section>
  );
}

export default StarRating;