import { useState } from "react";

const Cards = ({ id, Name, Price, Description, img, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const info = readMore ? Description : `${Description.substring(0, 100)}....`;

  function ReadHandler() {
    setReadMore(!readMore);
  }

  return (
    <div className="max-w-96">
      <div>
        <img src={img} alt="images" className="w-50" />
      </div>
      <div>
        <h4 className="text-green-500 font-bold text-xl">{Price}</h4>
        <h4 className="font-bold">{Name}</h4>
      </div>
      <div>
        <p className="w-50">{info}</p>
        <span className="text-blue-400" onClick={ReadHandler}>
          {readMore ? `Show less` : `Read more`}
        </span>
      </div>
      <button
        className="bg-orange-500 text-white font-bold m-3 p-3 rounded-md"
        onClick={() => removeTour(id)}
      >
        Not Interested
      </button>
    </div>
  );
};
``;

export default Cards;
