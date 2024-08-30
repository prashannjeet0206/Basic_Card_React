import { useState } from "react";
import { data } from "./components/data";
import Tours from "./components/tours";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  if (tours.length === 0) {
    return (
      <div>
        <h3>No Tours Left</h3>
        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <>
      <Tours travel={tours} removeTour={removeTour} />
    </>
  );
}

export default App;
