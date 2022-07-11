import React from "react";

class TvShows extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/tvshows")
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
    const navigateToPage = (key) => {
      let nav = useNavigate();
      return nav("/tvDetials/" + key);
    };
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
      <div className="grid grid-cols-8 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => navigation.navigate("details/tv/" + item.id)}
          >
            <h3>{item.title}</h3>
            <img src={item.image} />
          </div>
        ))}
      </div>
    );
  }
}

export default TvShows;