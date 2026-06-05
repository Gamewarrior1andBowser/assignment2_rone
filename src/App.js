import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {
  return (
    <>
      <main className='container flex'>
        <StarRating/>
        {/*<Dialog popup={true}/>*/}
      </main>
      <Dialog popup={false}/>
    </>
  );
}

export default App;
