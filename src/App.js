import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {
  return (
    <>
      <main className='container flex'>
        <StarRating/>
      </main>
      <footer>
        <Dialog/>
      </footer>
    </>
  );
}

export default App;
