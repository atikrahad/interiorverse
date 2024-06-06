import { useEffect, useState } from "react";
import Cardsgrid from "./Cardsgrid";

const Showcasecards = () => {
  const [collection, setCollection] = useState([]);
  const [over, setOver] = useState([false]);

  useEffect(() => {
    fetch("videos.json")
      .then((res) => res.json())
      .then((data) => setCollection(data));
  }, []);
  return (
    <div
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
      className={`space-y-10 opacity-50`}
    >
      <div
        className={`grid ${
          over ? "translate-x-24 duration-500" : "duration-500"
        } grid-cols-2 pr-40 gap-8`}
      >
        {collection.slice(0, 2).map((item) => (
          <Cardsgrid key={item.id} item={item} />
        ))}
      </div>
      <div
        className={`grid ${
          over ? "translate-x-16 duration-500" : "duration-500"
        } grid-cols-3 pr-10 gap-8`}
      >
        {collection.slice(2, 5).map((item) => (
          <Cardsgrid key={item.id} item={item} />
        ))}
      </div>
      <div  className={`grid grid-cols-3 ${
          over ? "-translate-x-16 duration-500" : "duration-500"
        } gap-8`}>
        {collection.slice(5, collection.length).map((item) => (
          <Cardsgrid key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Showcasecards;
