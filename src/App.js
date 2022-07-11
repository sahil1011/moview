import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Registration from "./pages/Registration";
import Details from "./pages/Details";
import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
import TvDetails from "./pages/TvDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PageHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tv-shows" element={<TvShows />} />
            <Route path="details" >
              <Route path="movie/:id" element={<Details />} />
              <Route path="tv/:id" element={<TvDetails />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
