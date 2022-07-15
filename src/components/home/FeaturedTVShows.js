import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const FeaturedTVShows = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    fetch("https://moview-backend.herokuapp.com/featuredTvShowsData")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  let nav = useNavigate();
  return (
    <div className="p-6">
      <h2 className="font-bold text-lg">Featured Movies</h2>
      <Slider className="py-6" {...settings}>
        {items?.length > 0 &&
          items.map((item, index) => (
            <div key={index} onClick={() => nav("details/movie/" + item.id)}>
              <h3>{item.title}</h3>
              <img src={item.image} width={200} height={400} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default FeaturedTVShows;
