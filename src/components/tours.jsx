import Cards from "./cards";

const Tours = ({ travel, removeTour }) => {
  return (
    <div className="flex flex-col items-center justify-center ]">
      <div className="m-10 text-center text-3xl font-bold border-dashed border-4 border-blue-800 rounded-lg p-2 w-96">
        <h2>Plan With Paul</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {travel.map((tour) => {
          return <Cards {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
