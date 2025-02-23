import { Navbar } from "../../components/navbar";
import "./info.css";

export const Info = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="image-container">
        <img id="header-image" src="floral_header4.jpg" alt="flowers" />
      </div>
    </div>
  );
};

export default Info;
