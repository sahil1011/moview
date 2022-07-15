import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TvShows = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    fetch("https://moview-backend.herokuapp.com/Tvshows")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);
  let nav = useNavigate();
  return (
    <div className="grid grid-cols-8 gap-4">
      {items?.length > 0 &&
        items.map((item, index) => (
          <div key={index} onClick={() => nav("/Details/tv/" + item.id)}>
            <h3>{item.title}</h3>
            <img src={item.image} />
          </div>
        ))}
    </div>
  );
};

export default TvShows;
