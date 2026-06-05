import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {
  return (
    <>
      <main className='container flex center'>
        <div className="rating">
          <h1>{"please leave a rating"}</h1>
          <StarRating/>
        </div>
      </main>
      <Dialog />
    </>
  );
}

export default App;
