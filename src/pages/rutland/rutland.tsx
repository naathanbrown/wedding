import { Navbar } from "../../components/navbar";
import "./rutland.css";

export const Rutland = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="image-container">
        <img id="header-image" src="floral_header4.jpg" alt="flowers" />
      </div>
      <div id="container">
        <h1>Rutland Water Ceremony</h1>
        <h2>Normanton Church</h2>
        <p>
          Our ceremony will take place at 11am at Normanton Church. This is a
          deconsecrated church and we will be having a civil ceremony.
        </p>
        <h2>Parking</h2>
        <p>
          Parking is best found at the Normanton Car Park at Rutland Water (LE15
          8HD). Parking here costs a few pounds and is a short 3-5 min walk from
          the Church. Should you need disabled parking access please contact
          Nathan or Samantha directly
        </p>
        <img id="carpark" src="carpark.png" alt="car park directions"></img>
      </div>
    </div>
  );
};

export default Rutland;
