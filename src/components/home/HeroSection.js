import React from "react";
import Slider from "react-slick";

class HeroSection extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/featuredHeroSectionData")
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
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <Slider {...settings}>
        {items?.length > 0 &&
          items.map((item) => (
            <div>
              <img src={item.image} width={1500} height={1000} />
            </div>
          ))}
      </Slider>
    );
  }
}
export default HeroSection;
