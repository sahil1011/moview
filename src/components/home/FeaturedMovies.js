import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

class FeaturedMovies extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/featuredMovieData")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
    };
    if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>{" "}
        </div>
      );
    return (
      <div className="p-6">
        <h2 className="font-bold text-lg">Featured Movies</h2>
        <Slider className="py-6" {...settings}>
          {items?.length > 0 &&
            items.map((item, index) => (
              <div
                key={index}
                onClick={() => useNavigate().nav("/Details/movie/" + item.id)}
              >
                <h3>{item.title}</h3>
                <img src={item.image} width={200} height={400} />
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}

export default FeaturedMovies;
