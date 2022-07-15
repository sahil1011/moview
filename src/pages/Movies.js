import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Movies = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    fetch("https://moview-backend.herokuapp.com/movies")
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
          <div
            key={index}
            onClick={() => navigation.navigate("/Details/movie/" + item.id)}
          >
            <h3>{item.title}</h3>
            <img src={item.image} />
          </div>
        ))}
    </div>
  );
};

export default Movies;
