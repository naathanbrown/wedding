import { Link, useLocation } from "react-router";
import { Navbar } from "../../components/navbar";
import "./Home.css";

export const Home = () => {
  const { search } = useLocation();

  return (
    <div className="App">
      <Navbar />
      <div className="image-container">
        <img id="header-image" src="floral_header4.jpg" alt="flowers" />
      </div>
      <h1 id="top-line">With love and joy,</h1>
      <h1 id="middle-line">
        Nathan <br /> and <br /> Samantha
      </h1>
      <h1 id="bottom-line">invite you to celebrate their wedding.</h1>
      <h1 id="bottom-line">27 September 2025</h1>
      <br />
      <Link id="bottom-line-link" to={{ pathname: "/rsvp", search }}>
        Please RSVP
      </Link>
    </div>
  );
};

export default Home;
