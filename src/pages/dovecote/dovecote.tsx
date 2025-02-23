import { Navbar } from "../../components/navbar";
import "./dovecote.css";

export const Dovecote = () => {
  const userType = localStorage.getItem("guest_type");

  return (
    <div className="App">
      <Navbar />
      <div className="image-container">
        <img id="header-image" src="floral_header4.jpg" alt="flowers" />
      </div>
      <div id="container">
        <h1>Dovecote</h1>
        <p>
          Dovecote Farm and Buttery is a family ran location in the historic
          village of Newton, just outside Geddington and around a 10 min drive
          from Corby and Kettering. (NN14 1BW)
        </p>
        {userType === "all" && (
          <div>
            <h2>Wedding Breakfast</h2>
            <p>
              You can arrive at Dovecote from 1pm. The wedding breakfast will
              begin at 3pm. There will be a full 3 course meal served and a bar
              on site. There will be a seating plan provided nearer the time.{" "}
            </p>
          </div>
        )}
        <h2>Reception</h2>
        <p>
          The reception will begin at 7pm. Do not arrive later than 7:30 as you
          will miss the first dance and cake cutting. The evening will have a
          DJ, a dance floor and a bar on site to purchase drinks. There will be
          pizza being served also.
        </p>
        <h2>Parking</h2>
        <p>
          Parking is available on site. Dovecote have also indicated it is
          acceptable to leave your car overnight and collect the next day.
        </p>
        <img
          id="dovecote-maps"
          src="dovecote-maps.png"
          alt="car park directions"
        ></img>
      </div>
    </div>
  );
};

export default Dovecote;
